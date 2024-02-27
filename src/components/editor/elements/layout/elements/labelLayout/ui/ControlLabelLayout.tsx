import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {FormatColorText} from "@mui/icons-material";
import {LabelLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlLabelLayout = () => {
    const addHandler = () => {
        editorStore.addElement(new LabelLayoutEditorElementDataStore())
    }
    return (
        <ControlElement label={"Label"} icon={FormatColorText} addHandler={addHandler}/>
    );
};

export default ControlLabelLayout