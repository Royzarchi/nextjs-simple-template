// This declares the right type of theme when used in the app
declare module "@emotion/react" {
  export interface Theme extends MyTheme {}
}

export interface MyTheme extends Base, Breakpoints {}

type Breakpoints = typeof breakpoints;
const breakpoints = {
  md: `@media (min-width: 992px)`,
  lg: `@media (min-width: 500px)`,
};

interface Base {
  colors: {
    background: string;
    foreground: string;
    text: {
      primary: {
        enabled: string;
        disabled: string;
      };
    };
  };
}

export const light: MyTheme = {
  colors: {
    background: "#000000",
    foreground: "#ffffff",
    text: {
      primary: {
        enabled: "#2281ff",
        disabled: "#b2bfce",
      },
    },
  },
  ...breakpoints,
};

export const dark: MyTheme = {
  colors: {
    background: "#ffffff",
    foreground: "#000000",
    text: {
      primary: {
        enabled: "#491779",
        disabled: "#b2bfce",
      },
    },
  },
  ...breakpoints,
};
