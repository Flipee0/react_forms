import React from "react";
import {TransferEditorElementDataStore} from "../model/store";
import editorStore from "../../../../../model/editorStore";

export const handleChoicesLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as TransferEditorElementDataStore).choices_label = e.target.value
}

export const handleChosenLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as TransferEditorElementDataStore).chosen_label = e.target.value
}

export const handleChoicesSelectedNumberLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as TransferEditorElementDataStore).choices_selected_number_label = e.target.value
}

export const handleChosenSelectedNumberLabelChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    (editorStore.getElementData(index) as TransferEditorElementDataStore).chosen_selected_number_label = e.target.value
}