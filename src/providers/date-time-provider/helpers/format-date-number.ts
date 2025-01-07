export const formatDateNumber = (dateNumber: number): string => {
  return dateNumber.toString().padStart(2, "0");
};
