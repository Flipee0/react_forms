import React from "react";
import {InputFieldEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

export const handleDefaultValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as InputFieldEditorElementDataStore).default_value = e.target.value
}