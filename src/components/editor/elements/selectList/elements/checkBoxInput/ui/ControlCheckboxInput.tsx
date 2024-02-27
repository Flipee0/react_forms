import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {Checklist} from "@mui/icons-material";
import {CheckboxEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlCheckboxInput = () => {
    const addHandler = () => {
        editorStore.addElement(new CheckboxEditorElementDataStore())
    }
    return (
        <ControlElement label={"Checkbox input"} icon={Checklist} addHandler={addHandler}/>
    );
};

export default ControlCheckboxInput