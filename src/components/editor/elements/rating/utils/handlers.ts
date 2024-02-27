import React from "react";
import {RatingEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

export const handleRatingLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as RatingEditorElementDataStore).rating_label = e.target.value
}
export const handleDefaultValueChange = (e: React.SyntheticEvent, new_value: number | null, index: number) => {
    (editorStore.getElementData(index) as RatingEditorElementDataStore).default_value = new_value
}