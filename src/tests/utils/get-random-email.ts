const DOMAINS: string[] = ["example.com", "test.com", "demo.org", "sample.net"];

export const getRandomEmail = (): string => {
  const randomString = (length: number): string =>
    Math.random()
      .toString(36)
      .substring(2, 2 + length);

  const username: string = randomString(8);
  const domain: string = DOMAINS[Math.floor(Math.random() * DOMAINS.length)];

  return `${username}@${domain}`;
};
