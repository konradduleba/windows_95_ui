import { FC, PropsWithChildren } from "react";

import { Footer, Header, Wrapper } from "./components";

import { ExplorerWindowProps, ExplorerWindowProvider } from "./providers";

export const ExplorerWindow: FC<PropsWithChildren<ExplorerWindowProps>> = ({
  children,
  ...props
}) => {
  return (
    <ExplorerWindowProvider {...props}>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </ExplorerWindowProvider>
  );
};
