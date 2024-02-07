import {createTheme, Theme} from "@mui/material/styles";

export const themeNames = {
    light: "light",
    dark: "dark",
}

export const darkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
    },
})

export const lightTheme: Theme = createTheme({
    palette: {
        mode: "light",
    },
})