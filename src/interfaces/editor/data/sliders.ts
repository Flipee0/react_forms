import {IBaseEditorInputsElementData} from "./base";

export interface ISliderEditorElementData extends IBaseEditorInputsElementData{
    slider_label: string
    min_value: number
    max_value: number
    value_label_display: "on" | "auto" | "off"
    isRanged: boolean
    default_value: number | number[]
    step: number | null
    marks: SliderMark[] | boolean
}

export type SliderMark = {
    value: number
    label: string
}