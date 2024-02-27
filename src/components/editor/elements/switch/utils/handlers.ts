import React from "react";
import {SwitchEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

export const handleSwitchLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as SwitchEditorElementDataStore).switch_label = e.target.value
}

export const handleDefaultValueToggle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as SwitchEditorElementDataStore).default_value = e.target.checked
}