import { checkIsLoginIsVisible } from "./check-is-login-is-visible";
import { loginUser } from "./login-user";

export const authenticateUser = async () => {
  await checkIsLoginIsVisible();
  await loginUser();
};
