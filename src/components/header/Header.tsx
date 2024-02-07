import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {themeNames} from "../../consts/themes";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {themeStore} from "../../store/themeStore";
import {observer} from "mobx-react-lite";

const Header = observer(() => {

    const changeThemeHandler = () => {
        themeStore.switchTheme()
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Forms
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={changeThemeHandler} color="inherit">
                    {themeStore.currentTheme === themeNames.dark ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
});

export default Header;