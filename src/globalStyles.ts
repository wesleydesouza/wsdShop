import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    black: "#000",
    white: "#FFF",

    gray300: "#d1d5db",
    gray500: "#35363A",
    gray900: "#202124",

    blue300: "#93c5fd",
    blue500: "#3b82f6",
    blue900: "#1e3a8a",
  },
} as const;

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.gray900};
    font-family: Inter, Sans-Serif;

    a{
        color: ${theme.colors.gray300};

    }

    a:link, a:visited {
    text-decoration: none;
    }

    a:hover {
        color: ${theme.colors.blue300};
        cursor: pointer;
    }
}
`;
