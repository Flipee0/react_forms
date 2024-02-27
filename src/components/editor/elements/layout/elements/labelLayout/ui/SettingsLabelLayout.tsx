import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import TextField from "@mui/material/TextField";
import { handleLabelChange } from '../utils/handlers';
import {LabelLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const SettingsLabelLayout: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as LabelLayoutEditorElementDataStore

    return (
        <TextField
            label="Label"
            variant="standard"
            fullWidth
            value={element.value}
            onChange={(e) => handleLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
        />
    );
};

export default SettingsLabelLayout