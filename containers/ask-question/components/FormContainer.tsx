'use client';

import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Editor } from '@tinymce/tinymce-react';
import { ControllerRenderProps, useForm } from 'react-hook-form';

import { createQuestion } from '@/actions/question';
import CloseIcon from '@/components/icons/CloseIcon';
import { badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  FormContext,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES_NAME } from '@/constants/routes';
import { FormAskQuestionSchema } from '@/containers/ask-question/schema';
import { FormAskQuestionType } from '@/containers/ask-question/types';
import { cn } from '@/lib/utils';

const MAX_LENGTH_TAG_VALUE = 15;

const KEYS = ['Enter', 'Tab'];

interface FormContainerProps {
  mongoUserId: string;
}

const FormContainer = ({ mongoUserId }: FormContainerProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const editorRef = useRef<Editor | null>(null);

  const methods = useForm<FormAskQuestionType>({
    resolver: zodResolver(FormAskQuestionSchema),
    defaultValues: {
      title: '',
      details: '',
      // expecting: '',
      tags: [],
    },
  });

  const { control, handleSubmit, setError, setValue, clearErrors } = methods;

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: ControllerRenderProps<FormAskQuestionType, 'tags'>,
  ) => {
    const tagInput = e.target as HTMLInputElement;
    const tagValue = tagInput.value.trim();

    if (!tagValue) return;
    if (KEYS.includes(e.key)) {
      e.preventDefault();

      if (tagValue.length) {
        if (tagValue.length > MAX_LENGTH_TAG_VALUE) {
          return setError('tags', {
            type: 'required',
            message: `Tag must be less than or equal to ${MAX_LENGTH_TAG_VALUE} characters`,
          });
        }

        if (!field.value.includes(tagValue)) {
          setValue('tags', [...field.value, tagValue]);
        } else {
          const newTags = [...field.value].filter((val) => val !== tagValue);
          setValue('tags', [...newTags, tagValue]);
        }
        tagInput.value = '';
        clearErrors('tags');
      }
    }
  };

  const handleChangeTags = (value: string, field: ControllerRenderProps<FormAskQuestionType, 'tags'>) => {
    const tags = field.value;
    field.onChange(tags.filter((tag) => tag !== value));
  };

  const onSubmit = async (data: FormAskQuestionType) => {
    try {
      await createQuestion({
        ...data,
        author: mongoUserId,
        path: pathname,
      });

      router.push(ROUTES_NAME.HOME);
    } catch (error) {}
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <section className="rounded-md border p-6">
          <FormField
            control={control}
            name="title"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="w-fit text-base font-semibold">Title</FormLabel>
                <FormDescription className="mb-1">
                  Be specific and imagine you're asking a question to another person.
                </FormDescription>
                <FormControl>
                  <Input
                    {...field}
                    errorMessage={error?.message}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
        </section>
        <section className="rounded-md border p-6">
          <FormField
            control={control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-fit text-base font-semibold">Body</FormLabel>
                <FormDescription className="mb-1">
                  The body of your question contains your problem details and results. Minimum 220 characters.
                </FormDescription>
                <FormControl>
                  <Editor
                    onEditorChange={field.onChange}
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(_, editor) => {
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    initialValue=""
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'codesample',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                      ],
                      toolbar:
                        'undo redo | blocks | ' +
                        'codesample | bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist',
                      content_style:
                        'body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 16px }',
                    }}
                  />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
        </section>
        <section className="rounded-md border p-6">
          <FormField
            control={control}
            name="tags"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="w-fit text-base font-semibold">Tags</FormLabel>
                <FormDescription className="mb-1">
                  Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                </FormDescription>
                <FormControl>
                  <Input
                    ref={field.ref}
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                    errorMessage={error?.message}
                    placeholder="e.g. (laravel asp.net-mvc angularjs)"
                  />
                </FormControl>
                <FormMessage className="mt-1" />

                <ul className="mt-3 flex items-center justify-start gap-x-2">
                  {field.value.length > 0
                    ? field.value.map((val) => (
                        <li key={val} className={cn(badgeVariants({ variant: 'tag-secondary' }), 'gap-x-1')}>
                          <span>{val}</span>
                          <Button
                            className="h-auto w-auto rounded-full p-0.5 hover:bg-secondary hover:text-white focus-visible:ring-secondary focus-visible:ring-offset-0 dark:hover:bg-secondary dark:focus-visible:ring-secondary"
                            variant="ghost"
                            onClick={() => handleChangeTags(val, field)}
                          >
                            <CloseIcon className="h-4 w-4" />
                          </Button>
                        </li>
                      ))
                    : null}
                </ul>
              </FormItem>
            )}
          />
        </section>

        <div className="flex items-center">
          <Button type="submit" variant="primary" className="ml-auto">
            Post Your Question
          </Button>
        </div>
      </form>
    </FormContext>
  );
};

export default FormContainer;
