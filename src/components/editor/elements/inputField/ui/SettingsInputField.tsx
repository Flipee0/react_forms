import React, {ChangeEventHandler, FC} from 'react';
import {IBaseEditorElementProps} from "../../elementProps";
import TextField from "@mui/material/TextField";
import SettingsInputBase from "../../SettingsInputBase";
import {handleDefaultValueChange} from "../utils/handlers";
import {FormControlLabel, Switch} from "@mui/material";
import {InputFieldEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const SettingsInputField: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as InputFieldEditorElementDataStore

    const handleInputLabelChange: ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.input_label = e.target.value
    }

    const handleMultilineToggle: ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.multiline = e.target.checked
    }

    return (
        <>
            <SettingsInputBase index={index}/>
            <FormControlLabel control={<Switch value={element.multiline} onChange={handleMultilineToggle}/>} label="Multiline" />
            <TextField
                label="Input label"
                variant="standard"
                fullWidth
                value={element.input_label}
                onChange={handleInputLabelChange}
            />
            <TextField
                label="Default value"
                variant="standard"
                fullWidth
                multiline={element.multiline}
                value={element.default_value}
                onChange={(e) => handleDefaultValueChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
        </>
    );
};

export default SettingsInputField