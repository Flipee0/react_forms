import React from 'react';
import ControlElement from "components/editor/controls/ControlElement";
import {Star} from "@mui/icons-material";
import {RatingEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

export const ControlRatingInput = () => {
    const addHandler = () => {
        editorStore.addElement(new RatingEditorElementDataStore())
    }
    return (
        <ControlElement label={"Rating"} icon={Star} addHandler={addHandler}/>
    );
};