import {makeObservable, observable, override} from "mobx";
import {INPUT_FIELD} from "../../../../../consts/elementsTypes";
import BaseEditorInputsElementDataStore from "../../../model/baseEditorInputsElementDataStore";

export class InputFieldEditorElementDataStore extends BaseEditorInputsElementDataStore{
    default_value: string = ""
    input_label: string = "Input label"
    multiline: boolean = false

    constructor() {
        super(INPUT_FIELD);
        makeObservable(this, {
            default_value: override,
            input_label: observable,
            multiline: observable,
        })
    }
}