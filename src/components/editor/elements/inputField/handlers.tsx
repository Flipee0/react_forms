import React from "react";
import {editorStore} from "../../../../store/editorStore";
import {IInputFieldEditorElementData} from "../../../../interfaces/editor/data/inputField";

export const handleDefaultValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as IInputFieldEditorElementData).default_value = e.target.value
}