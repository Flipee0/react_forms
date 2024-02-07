import {IBaseEditorInputsElementData} from "./base";

export interface ISwitchEditorElementData extends IBaseEditorInputsElementData{
    switch_label: string
    default_value: boolean
}