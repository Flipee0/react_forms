import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import TextField from "@mui/material/TextField";
import {editorStore} from "../../../../../store/editorStore";
import {handleDescriptionChange} from "./handlers";
import {DescriptionLayoutEditorElementDataStore} from "./store";

const SettingsDescriptionLayout: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as DescriptionLayoutEditorElementDataStore

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