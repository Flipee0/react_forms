import React from 'react';
import {editorStore} from "../../../../store/editorStore";
import ControlElement from "../../controls/ControlElement";
import {InputFieldEditorElementDataStore} from "./store";
import {Input} from "@mui/icons-material";

export const Control = () => {
    const addHandler = () => {
        editorStore.addElement(new InputFieldEditorElementDataStore())
    }
    return (
        <ControlElement label={"Input Field"} icon={Input} addHandler={addHandler}/>
    );
};