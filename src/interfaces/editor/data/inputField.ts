import {IBaseEditorInputsElementData} from "./base";

export interface IInputFieldEditorElementData extends IBaseEditorInputsElementData{
    input_label: string
    default_value: string
    multiline: boolean
}