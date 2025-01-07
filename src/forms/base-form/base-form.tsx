import { PropsWithChildren } from "react";
import { useCallback } from "react";
import { FormProvider, FieldValues, UseFormReturn } from "react-hook-form";
import { filterPayloadValues } from "../utils/filter-payload-values";

interface SourceFormProps<T extends FieldValues> {
  onSubmit: (values: T) => unknown;
  formParams: UseFormReturn<FieldValues, object>;
  className?: string;
  onInvalid?: (values: unknown) => void;
  id?: string;
}

export type BaseFormProps<T extends FieldValues> = PropsWithChildren<
  SourceFormProps<T>
>;

export const BaseForm = <T extends FieldValues>({
  className,
  children,
  onSubmit,
  formParams,
  onInvalid,
  id,
}: BaseFormProps<T>) => {
  const onValid = useCallback(
    (values: FieldValues) => {
      onSubmit(filterPayloadValues(values) as T);
    },
    [onSubmit]
  );

  const onInvalidHandler = useCallback(
    (values: FieldValues) => {
      onInvalid?.(values);
    },
    [onInvalid]
  );

  return (
    <FormProvider {...formParams}>
      <form
        onSubmit={formParams.handleSubmit(onValid, onInvalidHandler)}
        className={className}
        id={id}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default BaseForm;
