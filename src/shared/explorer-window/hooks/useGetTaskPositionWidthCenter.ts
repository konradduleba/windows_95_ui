import { useScreenProperties } from "@providers/screen-properties-provider/hooks";

export const useGetTaskPositionWidthCenter = () => {
  const { properties } = useScreenProperties();
  const { width } = properties;

  const getWidthTaskCenter = (windowWidth: number) => {
    return (width - windowWidth) / 2;
  };

  return {
    getWidthTaskCenter,
  };
};
