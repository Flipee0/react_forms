import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {ToggleOff} from "@mui/icons-material";
import {SwitchEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const ControlSwitchInput = () => {
    const addHandler = () => {
        editorStore.addElement(new SwitchEditorElementDataStore())
    }
    return (
        <ControlElement label={"Switch"} icon={ToggleOff} addHandler={addHandler}/>
    );
};

export default ControlSwitchInput