import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {Commit} from "@mui/icons-material";
import {SliderEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const ControlSliderInput = () => {
    const addHandler = () => {
        editorStore.addElement(new SliderEditorElementDataStore())
    }
    return (
        <ControlElement label={"Slider"} icon={Commit} addHandler={addHandler}/>
    );
};

export default ControlSliderInput