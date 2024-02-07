import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import TextField from "@mui/material/TextField";
import {editorStore} from "../../../../../store/editorStore";
import {ILabelLayoutEditorElementData} from "../../../../../interfaces/editor/data/textLayout";
import {handleDescriptionChange} from "./handlers";

const SettingsDescriptionLayout: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as ILabelLayoutEditorElementData

    return (
        <TextField
            label="Description"
            variant="standard"
            fullWidth
            multiline
            value={element.value}
            onChange={(e) => handleDescriptionChange(e as React.ChangeEvent<HTMLInputElement>, index)}
        />
    );
};

export default SettingsDescriptionLayout;