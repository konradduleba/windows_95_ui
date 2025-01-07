export type GetRandomNumberProps = {
  min: number;
  max: number;
  excludeNum?: number;
};

export const getRandomNumber = ({
  max,
  min,
  excludeNum,
}: GetRandomNumberProps): number => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  let randomNum;
  do {
    randomNum =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  } while (randomNum === excludeNum);

  return randomNum;
};
