import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import {Input} from "@mui/material";
import {editorStore} from "../../../../../store/editorStore";
import {ILabelLayoutEditorElementData} from "../../../../../interfaces/editor/data/textLayout";
import { handleLabelChange } from './handlers';

const EditLabelLayout: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as ILabelLayoutEditorElementData
    
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