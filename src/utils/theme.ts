import {themeNames} from "../consts/themes";

export const get_theme = (): string => {
    const theme = localStorage?.getItem("theme")
    if (theme) {
        return theme
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: light)")
    if (userMedia.matches) {
        localStorage.setItem("theme", themeNames.light)
        return themeNames.light
    }

    localStorage.setItem("theme", themeNames.dark)
    return themeNames.dark
}