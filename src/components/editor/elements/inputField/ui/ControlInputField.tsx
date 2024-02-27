import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {Input} from "@mui/icons-material";
import {InputFieldEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const ControlInputField = () => {
    const addHandler = () => {
        editorStore.addElement(new InputFieldEditorElementDataStore())
    }
    return (
        <ControlElement label={"Input Field"} icon={Input} addHandler={addHandler}/>
    );
};

export default ControlInputField