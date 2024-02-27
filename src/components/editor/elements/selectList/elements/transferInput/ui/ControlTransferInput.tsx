import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {KeyboardDoubleArrowRight} from "@mui/icons-material";
import {TransferEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlTransferInput = () => {
    const addHandler = () => {
        editorStore.addElement(new TransferEditorElementDataStore())
    }
    return (
        <ControlElement label={"Transfer list"} icon={KeyboardDoubleArrowRight} addHandler={addHandler}/>
    );
};

export default ControlTransferInput