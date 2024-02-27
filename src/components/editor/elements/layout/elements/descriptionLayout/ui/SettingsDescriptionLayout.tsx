import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import TextField from "@mui/material/TextField";
import {handleDescriptionChange} from "../utils/handlers";
import {DescriptionLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

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

export default SettingsDescriptionLayout