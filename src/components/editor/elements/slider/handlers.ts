import React from "react";
import {editorStore} from "../../../../store/editorStore";
import {ISliderEditorElementData} from "../../../../interfaces/editor/data/sliders";

export const handleSliderLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ISliderEditorElementData).slider_label = e.target.value
}