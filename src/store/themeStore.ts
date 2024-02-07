import {get_theme} from "../utils/theme";
import {makeAutoObservable} from "mobx";
import {themeNames} from "../consts/themes";

export class ThemeStore {
    currentTheme: string = get_theme()

    constructor() {
        makeAutoObservable(this)
    }

    switchTheme() {
        this.currentTheme = this.currentTheme === themeNames.light ? themeNames.dark : themeNames.light
    }
}

export const themeStore = new ThemeStore()