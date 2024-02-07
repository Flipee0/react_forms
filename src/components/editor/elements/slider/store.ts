import { BaseEditorInputsElementDataStore } from "../../../../store/editorStore"
import {makeObservable, observable, override} from "mobx";
import {SLIDER_INPUT} from "../../../../consts/elementsTypes";

export class SliderEditorElementDataStore extends BaseEditorInputsElementDataStore{
    slider_label: string = "Slider label"
    min_value: number = 0
    max_value: number = 100
    value_label_display: "on" | "auto" | "off" = "auto"
    isRanged: boolean = false
    default_value: number | number[] = 0
    step: number | null = 1
    marks: SliderMark[] | boolean = false
    constructor() {
        super(SLIDER_INPUT);
        makeObservable(this, {
            default_value: override,
            slider_label: observable,
            min_value: observable,
            max_value: observable,
            value_label_display: observable,
            isRanged: observable,
            step: observable,
            marks: observable,
        })
    }
}

export type SliderMark = {
    value: number
    label: string
}