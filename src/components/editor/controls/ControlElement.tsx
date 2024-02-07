import ListItem from '@mui/material/ListItem';
import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {IEditorElement} from "../../../interfaces/editor";
import {SvgIcon} from "@mui/material";
import {EditorElementsDefaultData} from "../../../consts/editorElementsDefaultData";
import {editorStore, ElementStore} from "../../../store/editorStore";
import {observer} from "mobx-react-lite";

type Props = {
    editor_element: IEditorElement
}

const ControlElement = observer(({editor_element}: Props) => {
    const addHandler = () => {
        const default_data = EditorElementsDefaultData.find((data) => data.type === editor_element.type)
        const new_length = editorStore.elements.push(new ElementStore(
            default_data!.type, default_data!.data
        ))
        editorStore.selected = new_length - 1
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onDoubleClick={addHandler}>
                <ListItemIcon>
                    <SvgIcon component={editor_element.control.icon}/>
                </ListItemIcon>
                <ListItemText primary={editor_element.control.label} />
            </ListItemButton>
        </ListItem>
    );
});

export default ControlElement;