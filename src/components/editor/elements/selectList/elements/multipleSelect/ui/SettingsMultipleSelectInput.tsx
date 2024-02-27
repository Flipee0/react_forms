import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import SettingsInputBase from "../../../../SettingsInputBase";
import {CheckboxValuesForm, SettingsSelectLabelField} from "../../../ui/CommonFields";
import Typography from "@mui/material/Typography";

const SettingsMultipleSelectInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <SettingsInputBase index={index}/>
            <SettingsSelectLabelField index={index}/>
            <Typography variant="body1">Options (click to box to set option as default)</Typography>
            <CheckboxValuesForm index={index} theme={theme} enableAddButton/>
        </>
    );
};

export default SettingsMultipleSelectInput