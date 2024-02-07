import React from "react";
import {editorStore} from "../../../../store/editorStore";
import {InputFieldEditorElementDataStore} from "./store";

export const handleDefaultValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as InputFieldEditorElementDataStore).default_value = e.target.value
}