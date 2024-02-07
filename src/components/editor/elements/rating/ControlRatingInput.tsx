import React from 'react';
import {editorStore} from "../../../../store/editorStore";
import ControlElement from "../../controls/ControlElement";
import {Star} from "@mui/icons-material";
import {RatingEditorElementDataStore} from "./store";

const ControlRatingInput = () => {
    const addHandler = () => {
        editorStore.addElement(new RatingEditorElementDataStore())
    }
    return (
        <ControlElement label={"Rating"} icon={Star} addHandler={addHandler}/>
    );
};

export default ControlRatingInput;