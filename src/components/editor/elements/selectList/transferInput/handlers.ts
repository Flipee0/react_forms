import React from "react";
import {editorStore} from "../../../../../store/editorStore";
import {TransferEditorElementDataStore} from "./store";

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