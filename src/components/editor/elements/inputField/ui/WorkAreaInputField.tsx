import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../elementProps";
import TextField from "@mui/material/TextField";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {handleDefaultValueChange} from "../utils/handlers";
import {InputFieldEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const WorkAreaInputField: FC<IBaseEditorElementProps> = ({index, theme}) => {
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

export default WorkAreaInputField