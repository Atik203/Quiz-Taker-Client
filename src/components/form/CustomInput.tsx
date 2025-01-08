import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TCustomInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
};

const CustomInput: FC<TCustomInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  className,
  required = false,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder || label}
              required={required}
              type={type}
              className={`bg-gray-100  dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${className}`}
              autoComplete="on"
            />
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
