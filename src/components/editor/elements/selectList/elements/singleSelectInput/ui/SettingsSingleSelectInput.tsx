import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import SettingsInputBase from "../../../../SettingsInputBase";
import {RadioValuesForm, SettingsSelectLabelField} from "../../../ui/CommonFields";
import Typography from "@mui/material/Typography";

const SettingsSingleSelectInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <SettingsInputBase index={index}/>
            <SettingsSelectLabelField index={index}/>
            <Typography variant="body1">Options (click to dot to set option as default)</Typography>
            <RadioValuesForm index={index} theme={theme} enableAddButton/>
        </>
    );
};

export default SettingsSingleSelectInput