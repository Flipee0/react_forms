import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import SettingsInputBase from "../../SettingsInputBase";
import {CheckboxValuesForm} from "../CommonFields";
import Typography from "@mui/material/Typography";

const SettingsCheckboxInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <SettingsInputBase index={index}/>
            <Typography variant="body1">Options (click to box to set option as default)</Typography>
            <CheckboxValuesForm index={index} theme={theme} enableAddButton/>
        </>
    );
};

export default SettingsCheckboxInput;