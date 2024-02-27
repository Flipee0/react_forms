import React from "react";
import {SELECT_INPUT_DEFAULT_OPTION} from "../../../../../consts/selectListDefault";
import {
    BaseMultipleSelectListEditorElementDataStore,
    BaseSelectListEditorElementDataStore,
    BaseSingleSelectListEditorElementDataStore
} from "../model/store";
import editorStore from "../../../model/editorStore";

export const handleAddOptionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    (editorStore.getElementData(index) as BaseSelectListEditorElementDataStore).values.push(SELECT_INPUT_DEFAULT_OPTION)
}

export const handleEditOptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, element_index: number) => {
   (editorStore.getElementData(index) as BaseSelectListEditorElementDataStore).values[element_index] = e.target.value
}

export const handleDefaultRadioValueChange = (event: React.ChangeEvent<HTMLInputElement>, value: string, index: number) => {
    (editorStore.getElementData(index) as BaseSingleSelectListEditorElementDataStore).default_value = Number.parseInt(value)
}

export const handleDefaultCheckboxValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, element_index: number) => {
    const element = editorStore.getElementData(index) as BaseMultipleSelectListEditorElementDataStore
    if (e.target.checked) {
        element.default_value.push(element_index)
    }
    else {
        element.default_value = element.default_value.filter((value) => value !== element_index)
    }
}

export const handleSelectLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as BaseSelectListEditorElementDataStore).select_label = e.target.value
}