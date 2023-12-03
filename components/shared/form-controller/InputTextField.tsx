import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputTextFieldProps<
  TFormValue extends FieldValues,
  TName extends FieldPath<TFormValue> = FieldPath<TFormValue>,
> {
  control: Control<TFormValue, TName>;
  name: TName;
  label?: JSX.Element | string;
  description?: JSX.Element | string;
  labelClassName?: string;
  formItemClassName?: string;
}

const InputTextField = <TFormValue extends FieldValues, TName extends FieldPath<TFormValue> = FieldPath<TFormValue>>({
  name,
  control,
  label,
  description,
  labelClassName,
  formItemClassName,
  ...props
}: InputTextFieldProps<TFormValue, TName> & typeof Input.defaultProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={formItemClassName}>
          {label && <FormLabel className={cn('mb-1 w-fit text-sm', labelClassName)}>{label}</FormLabel>}
          <FormControl>
            <Input {...props} {...field} disabled={props.disabled} errorMessage={error?.message} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage className="mt-1" />
        </FormItem>
      )}
    />
  );
};

export default InputTextField;
