const MIN_LENGTH = 4;
const CHARACTERS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const getRandomUsername = (): string => {
  const charactersLength = CHARACTERS.length;

  let username = "";
  for (let i = 0; i < MIN_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    username += CHARACTERS[randomIndex];
  }

  return username;
};
