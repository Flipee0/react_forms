import React from 'react';
import {editorStore} from "../../../../store/editorStore";
import ControlElement from "../../controls/ControlElement";
import {Commit} from "@mui/icons-material";
import {SliderEditorElementDataStore} from "./store";

const ControlSliderInput = () => {
    const addHandler = () => {
        editorStore.addElement(new SliderEditorElementDataStore())
    }
    return (
        <ControlElement label={"Slider"} icon={Commit} addHandler={addHandler}/>
    );
};

export default ControlSliderInput;