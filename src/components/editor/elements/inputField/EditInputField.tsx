import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../interfaces/editor/data/base";
import TextField from "@mui/material/TextField";
import WorkAreaInputBase from "../WorkAreaInputBase";
import {handleDefaultValueChange} from "./handlers";
import {editorStore} from "../../../../store/editorStore";
import {InputFieldEditorElementDataStore} from "./store";

const EditInputField: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as InputFieldEditorElementDataStore

    return (
        <div>
            <WorkAreaInputBase index={index} theme={theme}/>
            <TextField
                label={element.input_label}
                variant="standard"
                fullWidth
                multiline={element.multiline}
                placeholder="Value from this field will provide to form as default"
                value={element.default_value}
                onChange={(e) => handleDefaultValueChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
        </div>
    );
};

export default EditInputField;