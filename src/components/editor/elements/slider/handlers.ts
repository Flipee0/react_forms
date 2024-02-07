import React from "react";
import {editorStore} from "../../../../store/editorStore";
import {SliderEditorElementDataStore} from "./store";

export const handleSliderLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as SliderEditorElementDataStore).slider_label = e.target.value
}