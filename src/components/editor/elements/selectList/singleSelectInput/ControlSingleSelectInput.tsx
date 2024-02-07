import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {CreditCard} from "@mui/icons-material";
import {SingleSelectEditorElementDataStore} from "./store";

const ControlSingleSelectInput = () => {
    const addHandler = () => {
        editorStore.addElement(new SingleSelectEditorElementDataStore())
    }
    return (
        <ControlElement label={"Single select"} icon={CreditCard} addHandler={addHandler}/>
    );
};

export default ControlSingleSelectInput;