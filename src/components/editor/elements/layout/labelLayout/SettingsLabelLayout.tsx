import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import TextField from "@mui/material/TextField";
import {editorStore} from "../../../../../store/editorStore";
import { handleLabelChange } from './handlers';
import {LabelLayoutEditorElementDataStore} from "./store";

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

export default SettingsLabelLayout;