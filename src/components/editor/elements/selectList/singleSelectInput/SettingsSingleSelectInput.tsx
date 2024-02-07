import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import SettingsInputBase from "../../SettingsInputBase";
import {RadioValuesForm, SettingsSelectLabelField} from "../CommonFields";
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

export default SettingsSingleSelectInput;