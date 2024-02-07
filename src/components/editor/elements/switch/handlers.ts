import React from "react";
import {editorStore} from "../../../../store/editorStore";
import {ISwitchEditorElementData} from "../../../../interfaces/editor/data/switch";

export const handleSwitchLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ISwitchEditorElementData).switch_label = e.target.value
}

export const handleDefaultValueToggle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ISwitchEditorElementData).default_value = e.target.checked
}