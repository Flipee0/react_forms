import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {KeyboardDoubleArrowRight} from "@mui/icons-material";
import {TransferEditorElementDataStore} from "./store";

const ControlTransferInput = () => {
    const addHandler = () => {
        editorStore.addElement(new TransferEditorElementDataStore())
    }
    return (
        <ControlElement label={"Transfer list"} icon={KeyboardDoubleArrowRight} addHandler={addHandler}/>
    );
};

export default ControlTransferInput;