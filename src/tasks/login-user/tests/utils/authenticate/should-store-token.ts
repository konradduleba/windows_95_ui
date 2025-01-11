import { expect, it } from "vitest";

export const shouldStoreToken = () => {
  it("Should store the token", () => {
    const accessToken = localStorage.getItem("accessToken");
    expect(accessToken).toBeDefined();
  });
};
