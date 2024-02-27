import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {Abc} from "@mui/icons-material";
import {DescriptionLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

const ControlDescriptionLayout = () => {
    const addHandler = () => {
        editorStore.addElement(new DescriptionLayoutEditorElementDataStore())
    }
    return (
        <ControlElement label={"Description"} icon={Abc} addHandler={addHandler}/>
    );
};

export default ControlDescriptionLayout