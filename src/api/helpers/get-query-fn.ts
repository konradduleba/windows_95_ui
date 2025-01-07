import { UseQueryProps } from "@api/types";

type GetQueryFnProps<Type> = UseQueryProps<Type> & {
  fn: () => Promise<Type>;
};

export const getQueryFn = async <Type>({
  fn,
  onSuccess,
  onError,
  onSettled,
}: GetQueryFnProps<Type>) => {
  try {
    const data = await fn();
    onSuccess?.(data);
    return data;
  } catch (error) {
    onError?.(error);
  } finally {
    onSettled?.();
  }
};
