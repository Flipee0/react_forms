import React from "react";
import {DescriptionLayoutEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

export const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as DescriptionLayoutEditorElementDataStore).value = e.target.value
}