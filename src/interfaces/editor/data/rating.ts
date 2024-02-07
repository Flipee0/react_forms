import {IBaseEditorInputsElementData} from "./base";

export interface IRatingEditorElementData extends IBaseEditorInputsElementData{
    default_value: number | null
    rating_label: string
    max_rating: number
}