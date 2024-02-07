import ListItem from '@mui/material/ListItem';
import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {SvgIcon} from "@mui/material";
import {observer} from "mobx-react-lite";
import {SvgIconComponent} from "@mui/icons-material";

type Props = {
    label: string
    icon: SvgIconComponent
    addHandler: () => void
}

const ControlElement = observer(({label, icon, addHandler}: Props) => {
    return (
        <ListItem disablePadding>
            <ListItemButton onDoubleClick={addHandler}>
                <ListItemIcon>
                    <SvgIcon component={icon}/>
                </ListItemIcon>
                <ListItemText primary={label} />
            </ListItemButton>
        </ListItem>
    );
});

export default ControlElement;