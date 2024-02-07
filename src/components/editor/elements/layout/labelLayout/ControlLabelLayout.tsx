import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {FormatColorText} from "@mui/icons-material";
import {LabelLayoutEditorElementDataStore} from "./store";

const ControlLabelLayout = () => {
    const addHandler = () => {
        editorStore.addElement(new LabelLayoutEditorElementDataStore())
    }
    return (
        <ControlElement label={"Label"} icon={FormatColorText} addHandler={addHandler}/>
    );
};

export default ControlLabelLayout;