import {IBaseEditorInputsElementData} from "./base";

export interface IBaseSelectListEditorElementData extends IBaseEditorInputsElementData{
    values: string[]
    select_label: string
}

export interface IBaseSingleSelectListEditorElementData extends IBaseSelectListEditorElementData {
    default_value: number | null
}

export interface IBaseMultipleSelectListEditorElementData extends IBaseSelectListEditorElementData {
    default_value: number[]
}

export interface IRadioEditorElementData extends IBaseSingleSelectListEditorElementData {}
export interface ICheckboxEditorElementData extends IBaseMultipleSelectListEditorElementData {}
export interface ISingleSelectEditorElementData extends IBaseSelectListEditorElementData {
    default_value: number | ""
}
export interface IMultipleSelectEditorElementData extends IBaseMultipleSelectListEditorElementData {}
export interface ITransferEditorElementData extends IBaseMultipleSelectListEditorElementData {
    choices_label: string
    chosen_label: string
    choices_selected_number_label: string
    chosen_selected_number_label: string
    enable_move_all: boolean
}