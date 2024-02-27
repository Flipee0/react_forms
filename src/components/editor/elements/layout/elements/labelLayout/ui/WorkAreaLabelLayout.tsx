import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import {Input} from "@mui/material";
import { handleLabelChange } from '../utils/handlers';
import {LabelLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const WorkAreaLabelLayout: FC<IBaseEditorElementProps> = ({index, theme}) => {
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

export default WorkAreaLabelLayout