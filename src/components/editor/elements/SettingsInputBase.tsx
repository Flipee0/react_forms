import React, {ChangeEventHandler} from 'react';
import {FormControlLabel, Switch} from "@mui/material";
import TextField from "@mui/material/TextField";
import {observer} from "mobx-react-lite";
import {handleDescriptionChange, handleLabelChange} from "./handlers";
import BaseEditorInputsElementDataStore from "../model/baseEditorInputsElementDataStore";
import editorStore from "../model/editorStore";

type Props = {
    index: number
}

const SettingsInputBase = observer(({index}: Props) => {
    const element = editorStore.getElementData(index) as BaseEditorInputsElementDataStore

    const handleRequiredToggle: ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.required = e.target.checked
    }

    return (
        <>
            <FormControlLabel control={<Switch checked={element.required} onChange={handleRequiredToggle}/>} label="Is required to fill?" />
            <TextField
                label="Label"
                variant="standard"
                fullWidth
                value={element.label}
                onChange={(e) => handleLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <TextField
                label="Description"
                variant="standard"
                fullWidth
                multiline
                value={element.description}
                onChange={(e) => handleDescriptionChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
        </>
    );
});

export default SettingsInputBase;