import {makeObservable, observable} from "mobx";
import BaseEditorElementDataStore from "./baseEditorElementDataStore";

export default class BaseEditorInputsElementDataStore extends BaseEditorElementDataStore {
    required: boolean = true
    default_value: any
    label: string = "Label"
    description: string = "Description"

    constructor(type: string) {
        super(type)
        makeObservable(this, {
            required: observable,
            default_value: observable,
            label: observable,
            description: observable,
        })
    }
}