import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import TextField from "@mui/material/TextField";
import SettingsInputBase from "../../SettingsInputBase";
import {CheckboxValuesForm} from "../CommonFields";
import {editorStore} from "../../../../../store/editorStore";
import {
    ITransferEditorElementData
} from "../../../../../interfaces/editor/data/selectLists";
import {
    handleChoicesLabelChange,
    handleChoicesSelectedNumberLabelChange,
    handleChosenLabelChange,
    handleChosenSelectedNumberLabelChange
} from "./handlers";
import Typography from "@mui/material/Typography";

const SettingsTransferInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as ITransferEditorElementData

    return (
        <>
            <SettingsInputBase index={index}/>
            <TextField
                label="Left side label"
                variant="standard"
                fullWidth
                value={element.choices_label}
                onChange={(e) => handleChoicesLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <TextField
                label="Right side label"
                variant="standard"
                fullWidth
                value={element.chosen_label}
                onChange={(e) => handleChosenLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <TextField
                label="Left side selected label"
                variant="standard"
                fullWidth
                value={element.choices_selected_number_label}
                onChange={(e) => handleChoicesSelectedNumberLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <TextField
                label="Right side selected label"
                variant="standard"
                fullWidth
                value={element.chosen_selected_number_label}
                onChange={(e) => handleChosenSelectedNumberLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <Typography variant="body1">Options</Typography>
            <CheckboxValuesForm index={index} theme={theme} enableAddButton/>
        </>
    );
};

export default SettingsTransferInput;