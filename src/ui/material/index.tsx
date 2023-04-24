import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PropsWithChildren } from "react";

export const cssVar = (name: string) =>
  typeof window !== "undefined"
    ? getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim() !== ""
      ? getComputedStyle(document.documentElement).getPropertyValue(name).trim()
      : "#fff"
    : "#fff";

const theme = createTheme({
  palette: {
    primary: {
      main: cssVar("--color-primary"),
    },
    secondary: {
      main: cssVar("--color-secondary"),
    },
    success: {
      main: cssVar("--color-success"),
    },
    grey: {
      100: cssVar("--color-grey-100"),
      200: cssVar("--color-grey-200"),
      300: cssVar("--color-grey-300"),
      600: cssVar("--color-grey-600"),
      700: cssVar("--color-grey-700"),
    },
  },
  typography: {
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export const MaterialThemeContext = (props: PropsWithChildren) => {
  return (
    <MaterialThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {props.children}
      </LocalizationProvider>
    </MaterialThemeProvider>
  );
};
