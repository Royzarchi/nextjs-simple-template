import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppTheme } from "../theme/provider";
import { dark, light, MyTheme } from "../theme/themes";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppTheme<MyTheme> light={light} dark={dark}>
      {getLayout(<Component {...pageProps} />)}
    </AppTheme>
  );
}

export default MyApp;
