import { BaseEditorInputsElementDataStore } from "../../../../store/editorStore"
import {makeObservable, observable, override} from "mobx";
import {SWITCH_INPUT} from "../../../../consts/elementsTypes";

export class SwitchEditorElementDataStore extends BaseEditorInputsElementDataStore {
    switch_label: string = "Switch label"
    default_value: boolean = false
    constructor() {
        super(SWITCH_INPUT);
        makeObservable(this, {
            default_value: override,
            switch_label: observable,
        })
        this.required = false
    }
}