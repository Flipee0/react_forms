import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {RadioButtonChecked} from "@mui/icons-material";
import {RadioEditorElementDataStore} from "./store";

const ControlRadioInput = () => {
    const addHandler = () => {
        editorStore.addElement(new RadioEditorElementDataStore())
    }
    return (
        <ControlElement label={"Choose one input"} icon={RadioButtonChecked} addHandler={addHandler}/>
    );
};

export default ControlRadioInput;