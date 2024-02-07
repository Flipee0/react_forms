import React, {FC, ReactNode} from 'react';
import { ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeNames, darkTheme, lightTheme } from '../consts/themes';
import {observer} from "mobx-react-lite";
import {themeStore} from "../store/themeStore";


interface Props {
    children: ReactNode | ReactNode[]
}

const ThemeWrapper: FC<Props> = observer(({children}) => {
    return (
        <div>
            <ThemeProvider theme={themeStore.currentTheme === themeNames.dark ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </div>
    );
});

export default ThemeWrapper;