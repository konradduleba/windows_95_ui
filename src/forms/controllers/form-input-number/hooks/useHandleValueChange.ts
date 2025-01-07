import { useController } from "react-hook-form";
import { FormInputNumberProps } from "../types";

const NUMBER_REGEX = /^[0-9]*$/;

export const useHandleValueChange = ({
  max,
  min,
  name,
  step = 1,
}: FormInputNumberProps) => {
  const { field, fieldState } = useController({
    name,
  });

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;

    if (inputValue === "" || NUMBER_REGEX.test(inputValue)) {
      field.onChange(inputValue);
    }
  };

  const onInrementValue = () => {
    let newValue = (parseFloat(field.value) || 0) + step;
    if (max !== undefined && newValue > max) newValue = max;
    field.onChange(newValue);
  };

  const onDecrementValue = () => {
    let newValue = (parseFloat(field.value) || 0) - step;
    if (min !== undefined && newValue < min) newValue = min;
    field.onChange(newValue);
  };

  return {
    onHandleChange,
    value: field.value,
    onInrementValue,
    onDecrementValue,
    isInvalid: fieldState.invalid,
  };
};
