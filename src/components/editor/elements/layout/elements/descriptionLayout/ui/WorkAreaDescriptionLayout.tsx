import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import {Input} from "@mui/material";
import {handleDescriptionChange} from "../utils/handlers";
import {DescriptionLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const WorkAreaDescriptionLayout: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as DescriptionLayoutEditorElementDataStore

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

export default WorkAreaDescriptionLayout