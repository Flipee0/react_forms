import {editorStore} from "../../../../store/editorStore";
import {IRatingEditorElementData} from "../../../../interfaces/editor/data/rating";
import React from "react";

export const handleRatingLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as IRatingEditorElementData).rating_label = e.target.value
}
export const handleDefaultValueChange = (e: React.SyntheticEvent, new_value: number | null, index: number) => {
    (editorStore.getElementData(index) as IRatingEditorElementData).default_value = new_value
}