import React from "react";
import {editorStore} from "../../../../../store/editorStore";
import {ITransferEditorElementData} from "../../../../../interfaces/editor/data/selectLists";

export const handleChoicesLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ITransferEditorElementData).choices_label = e.target.value
}

export const handleChosenLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ITransferEditorElementData).chosen_label = e.target.value
}

export const handleChoicesSelectedNumberLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ITransferEditorElementData).choices_selected_number_label = e.target.value
}

export const handleChosenSelectedNumberLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as ITransferEditorElementData).chosen_selected_number_label = e.target.value
}