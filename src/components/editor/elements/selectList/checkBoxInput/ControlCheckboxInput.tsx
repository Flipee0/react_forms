import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {Checklist} from "@mui/icons-material";
import {CheckboxEditorElementDataStore} from "./store";

const ControlCheckboxInput = () => {
    const addHandler = () => {
        editorStore.addElement(new CheckboxEditorElementDataStore())
    }
    return (
        <ControlElement label={"Checkbox input"} icon={Checklist} addHandler={addHandler}/>
    );
};

export default ControlCheckboxInput;