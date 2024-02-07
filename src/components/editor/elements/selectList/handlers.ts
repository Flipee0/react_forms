import {editorStore} from "../../../../store/editorStore";
import {
    IBaseMultipleSelectListEditorElementData,
    IBaseSelectListEditorElementData, IBaseSingleSelectListEditorElementData,
} from "../../../../interfaces/editor/data/selectLists";
import React from "react";
import {SELECT_INPUT_DEFAULT_OPTION} from "../../../../consts/editorElementsDefaultData";

export const handleAddOptionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    (editorStore.getElementData(index) as IBaseSelectListEditorElementData).values.push(SELECT_INPUT_DEFAULT_OPTION)
}

export const handleEditOptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, element_index: number) => {
   (editorStore.getElementData(index) as IBaseSelectListEditorElementData).values[element_index] = e.target.value
}

export const handleDefaultRadioValueChange = (event: React.ChangeEvent<HTMLInputElement>, value: string, index: number) => {
    (editorStore.getElementData(index) as IBaseSingleSelectListEditorElementData).default_value = Number.parseInt(value)
}

export const handleDefaultCheckboxValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, element_index: number) => {
    const element = editorStore.getElementData(index) as IBaseMultipleSelectListEditorElementData
    if (e.target.checked) {
        element.default_value.push(element_index)
    }
    else {
        element.default_value = element.default_value.filter((value) => value !== element_index)
    }
}

export const handleSelectLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as IBaseSelectListEditorElementData).select_label = e.target.value
}