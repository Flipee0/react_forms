import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {CreditCard} from "@mui/icons-material";
import {SingleSelectEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlSingleSelectInput = () => {
    const addHandler = () => {
        editorStore.addElement(new SingleSelectEditorElementDataStore())
    }
    return (
        <ControlElement label={"Single select"} icon={CreditCard} addHandler={addHandler}/>
    );
};

export default ControlSingleSelectInput