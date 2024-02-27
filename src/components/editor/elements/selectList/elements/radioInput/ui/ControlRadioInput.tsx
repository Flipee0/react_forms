import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {RadioButtonChecked} from "@mui/icons-material";
import {RadioEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlRadioInput = () => {
    const addHandler = () => {
        editorStore.addElement(new RadioEditorElementDataStore())
    }
    return (
        <ControlElement label={"Choose one input"} icon={RadioButtonChecked} addHandler={addHandler}/>
    );
};

export default ControlRadioInput