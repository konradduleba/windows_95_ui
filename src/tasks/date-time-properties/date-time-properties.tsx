import { FC } from "react";
import { BaseForm, useBaseForm } from "forms";

import { DateTimeTabs, TaskWindow } from "./components";

import {
  DateAndTimeFormValues,
  dateAndTimeValidationSchema,
  useFormDefaultValues,
} from "./form";

export const DateTimeProperties: FC = () => {
  const defaultValues = useFormDefaultValues();

  const formParams = useBaseForm<DateAndTimeFormValues>({
    validationSchema: dateAndTimeValidationSchema,
    defaultValues,
  });

  const onSubmit = (values: DateAndTimeFormValues) => {
    console.log(values);
  };

  return (
    <BaseForm formParams={formParams} onSubmit={onSubmit}>
      <TaskWindow>
        <DateTimeTabs />
      </TaskWindow>
    </BaseForm>
  );
};
