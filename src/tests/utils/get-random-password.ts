import { PASSWORD_CONFIG } from "@tasks/register-user/form/validation";

export const getRandomPassword = (): string => {
  const { minLength, minUppercase, minSymbols, minLowercase, minNumbers } =
    PASSWORD_CONFIG;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

  const getRandomChar = (chars: string): string =>
    chars[Math.floor(Math.random() * chars.length)];

  let password = "";

  for (let i = 0; i < minUppercase; i++) {
    password += getRandomChar(uppercaseChars);
  }

  for (let i = 0; i < minLowercase; i++) {
    password += getRandomChar(lowercaseChars);
  }

  for (let i = 0; i < minNumbers; i++) {
    password += getRandomChar(numberChars);
  }

  for (let i = 0; i < minSymbols; i++) {
    password += getRandomChar(symbolChars);
  }

  const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;

  while (password.length < minLength) {
    password += getRandomChar(allChars);
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
};
