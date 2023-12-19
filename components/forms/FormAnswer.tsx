'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Editor } from '@tinymce/tinymce-react';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';

import { createAnswer } from '@/actions/answer';
import BoltIcon from '@/components/icons/BoltIcon';
import { Button } from '@/components/ui/button';
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormAnswerSchema } from '@/containers/question/schema';
import { FormAnswerType } from '@/containers/question/types';

interface FormAnswerProps {
  userId: string;
  questionId: string;
}

const FormAnswer = ({ userId, questionId }: FormAnswerProps) => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const editorRef = useRef<Editor | null>(null);

  const methods = useForm<FormAnswerType>({
    resolver: zodResolver(FormAnswerSchema),
    defaultValues: {
      answerDetail: '',
    },
  });

  const { handleSubmit, reset, control } = methods;

  const onSubmit = async (data: FormAnswerType) => {
    try {
      await createAnswer({
        answerDetail: data.answerDetail,
        author: userId,
        question: questionId,
        path: pathname,
      });
      reset();
      if (editorRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const editor = editorRef.current as any;

        editor?.setContent('');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('FormAnswer', error);
    }
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <FormField
          control={control}
          name="answerDetail"
          render={({ field }) => (
            <FormItem>
              <div className="mb-3 flex items-center justify-between">
                <FormLabel className="mb-2 w-fit text-base">Your Answer</FormLabel>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-warning-light bg-warning-lighter/40 text-warning-darker hover:bg-warning-lighter/70 hover:text-warning-dark dark:border-warning dark:bg-warning dark:text-accent dark:hover:border-warning-lighter dark:hover:bg-warning-lighter"
                  type="button"
                >
                  <BoltIcon className="mr-1 h-5 w-5" />
                  <span>Generate AI Answer</span>
                </Button>
              </div>
              <FormControl>
                <Editor
                  key={theme}
                  onEditorChange={field.onChange}
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(_, editor) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  // initialValue=""
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
                    skin: theme === 'light' ? 'oxide' : 'oxide-dark',
                    content_css: theme === 'light' ? 'default' : 'dark',
                  }}
                />
              </FormControl>
              <FormMessage className="mt-1" />
            </FormItem>
          )}
        />

        <Button variant="primary" size="sm" className="ml-auto mt-6">
          Post Your Answer
        </Button>
      </form>
    </FormContext>
  );
};

export default FormAnswer;
