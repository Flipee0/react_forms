import {BaseEditorInputsElementDataStore} from "../../../../store/editorStore";
import {INPUT_FIELD} from "../../../../consts/elementsTypes";
import {makeObservable, observable, override} from "mobx";

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