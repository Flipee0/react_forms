import React from 'react';
import {editorStore} from "../../../../../store/editorStore";
import ControlElement from "../../../controls/ControlElement";
import {Abc} from "@mui/icons-material";
import {DescriptionLayoutEditorElementDataStore} from "./store";

const ControlDescriptionLayout = () => {
    const addHandler = () => {
        editorStore.addElement(new DescriptionLayoutEditorElementDataStore())
    }
    return (
        <ControlElement label={"Description"} icon={Abc} addHandler={addHandler}/>
    );
};

export default ControlDescriptionLayout;