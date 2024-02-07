import React from "react";
import {editorStore} from "../../../store/editorStore";
import {IBaseEditorInputsElementData} from "../../../interfaces/editor/data/base";

export const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as IBaseEditorInputsElementData).label = e.target.value
}

export const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as IBaseEditorInputsElementData).description = e.target.value
}