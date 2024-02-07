import React from "react";
import {editorStore} from "../../../../../store/editorStore";
import {LabelLayoutEditorElementDataStore} from "./store";

export const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as LabelLayoutEditorElementDataStore).value = e.target.value
}