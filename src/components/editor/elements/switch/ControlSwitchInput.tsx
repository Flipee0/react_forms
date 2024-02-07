import React from 'react';
import {editorStore} from "../../../../store/editorStore";
import ControlElement from "../../controls/ControlElement";
import {ToggleOff} from "@mui/icons-material";
import {SwitchEditorElementDataStore} from "./store";

const ControlSwitchInput = () => {
    const addHandler = () => {
        editorStore.addElement(new SwitchEditorElementDataStore())
    }
    return (
        <ControlElement label={"Switch"} icon={ToggleOff} addHandler={addHandler}/>
    );
};

export default ControlSwitchInput;