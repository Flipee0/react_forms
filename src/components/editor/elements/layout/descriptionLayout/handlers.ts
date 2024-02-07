import React from "react";
import {editorStore} from "../../../../../store/editorStore";
import {ILabelLayoutEditorElementData} from "../../../../../interfaces/editor/data/textLayout";

export const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ILabelLayoutEditorElementData).value = e.target.value
}