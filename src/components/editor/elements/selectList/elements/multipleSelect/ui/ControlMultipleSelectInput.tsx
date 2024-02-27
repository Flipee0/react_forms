import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {AddCard} from "@mui/icons-material";
import {MultipleSelectEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlMultipleSelectInput = () => {
    const addHandler = () => {
        editorStore.addElement(new MultipleSelectEditorElementDataStore())
    }
    return (
        <ControlElement label={"Multiple select"} icon={AddCard} addHandler={addHandler}/>
    );
};

export default ControlMultipleSelectInput