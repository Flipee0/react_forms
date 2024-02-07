import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {AddCard} from "@mui/icons-material";
import {MultipleSelectEditorElementDataStore} from "./store";

const ControlMultipleSelectInput = () => {
    const addHandler = () => {
        editorStore.addElement(new MultipleSelectEditorElementDataStore())
    }
    return (
        <ControlElement label={"Multiple select"} icon={AddCard} addHandler={addHandler}/>
    );
};

export default ControlMultipleSelectInput;