import React from "react";
import {LabelLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

export const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as LabelLayoutEditorElementDataStore).value = e.target.value
}