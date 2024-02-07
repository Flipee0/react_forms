import React from "react";
import {editorStore} from "../../../../../store/editorStore";
import {DescriptionLayoutEditorElementDataStore} from "./store";

export const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as DescriptionLayoutEditorElementDataStore).value = e.target.value
}