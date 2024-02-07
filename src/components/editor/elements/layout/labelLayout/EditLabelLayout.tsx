import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import {Input} from "@mui/material";
import {editorStore} from "../../../../../store/editorStore";
import { handleLabelChange } from './handlers';
import {LabelLayoutEditorElementDataStore} from "./store";

const EditLabelLayout: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as LabelLayoutEditorElementDataStore
    
    return (
        <Input
            fullWidth
            sx={{ fontSize: theme.typography.h5.fontSize}}
            disableUnderline
            value={element.value}
            onChange={(e) => handleLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
        />
    );
};

export default EditLabelLayout;