import "@emotion/react";
import { css, Global, ThemeProvider } from "@emotion/react";
import React, { PropsWithChildren } from "react";
import { ThemeProvider as Themes } from "next-themes";

interface AppThemeProps<T> {
  light: T;
  dark: T;
}

export function AppTheme<ThemeType extends Object>(
  props: PropsWithChildren<AppThemeProps<ThemeType>>
) {
  return (
    <ThemeProvider theme={transformThemeToCssVars<ThemeType>("", props.light)}>
      <Global
        styles={css`
          :root {
            ${transformThemeToCssString<ThemeType>("", props.light)}
          }

          [data-theme="dark"] {
            ${transformThemeToCssString<ThemeType>("", props.dark)}
          }
        `}
      />
      <Themes>{props.children}</Themes>
    </ThemeProvider>
  );
}

const transformThemeToCssString = <Theme extends Object>(
  prefix: string,
  theme: Theme
) => {
  let css = "";
  for (const [key, value] of Object.entries(theme)) {
    if (value instanceof Object) {
      css += ` ${transformThemeToCssString(
        prefix === "" ? key : prefix + "-" + key,
        value
      )}`;
    } else {
      css += ` --${prefix === "" ? "" : prefix + "-"}${key}: ${value};`;
    }
  }
  return css;
};

const transformThemeToCssVars = <T extends Object>(
  prefix: string,
  theme: T
): T => {
  const modifiedTheme = Object.create(theme);
  for (const [key, value] of Object.entries(theme)) {
    const parentPath = prefix === "" ? key : `${prefix}-${key}`;
    if (value instanceof Object) {
      modifiedTheme[key] = transformThemeToCssVars(parentPath, value);
    } else {
      if (key !== "md") {
        modifiedTheme[key] = `var(--${parentPath})`;
      } else {
        modifiedTheme[key] = value;
      }
    }
  }
  return modifiedTheme;
};
