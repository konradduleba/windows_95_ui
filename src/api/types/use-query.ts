export type UseQueryProps<Type> = {
  onSuccess?: (data: Type) => void;
  onError?: (error: unknown) => void;
  onSettled?: () => void;
};
