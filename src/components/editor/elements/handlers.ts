import React from "react";
import {BaseEditorInputsElementDataStore, editorStore} from "../../../store/editorStore";

export const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as BaseEditorInputsElementDataStore).label = e.target.value
}

export const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as BaseEditorInputsElementDataStore).description = e.target.value
}