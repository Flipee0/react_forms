import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import {Input} from "@mui/material";
import {handleDescriptionChange} from "./handlers";
import {editorStore} from "../../../../../store/editorStore";
import {ILabelLayoutEditorElementData} from "../../../../../interfaces/editor/data/textLayout";

const EditDescriptionLayout: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as ILabelLayoutEditorElementData

    return (
        <Input
            fullWidth
            sx={{ fontSize: theme.typography.body1.fontSize}}
            disableUnderline
            multiline
            value={element.value}
            onChange={(e) => handleDescriptionChange(e as React.ChangeEvent<HTMLInputElement>, index)}
        />
    );
};

export default EditDescriptionLayout;