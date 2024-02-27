import React from "react";
import {SliderEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

export const handleSliderLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as SliderEditorElementDataStore).slider_label = e.target.value
}