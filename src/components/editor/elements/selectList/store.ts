import { BaseEditorInputsElementDataStore } from "../../../../store/editorStore"
import {makeObservable, observable, override} from "mobx";
import {SELECT_INPUT_DEFAULT_OPTION} from "../../../../consts/selectListDefault";

export class BaseSelectListEditorElementDataStore extends BaseEditorInputsElementDataStore {
    values: string[] = [SELECT_INPUT_DEFAULT_OPTION]
    select_label: string
    constructor(type: string, select_label: string) {
        super(type);
        makeObservable(this, {
            values: observable,
            select_label: observable,
        })
        this.select_label = select_label
    }
}

export class BaseSingleSelectListEditorElementDataStore extends BaseSelectListEditorElementDataStore {
    default_value: number | null = null
    constructor(type: string, select_label: string) {
        super(type, select_label);
        makeObservable(this, {
            default_value: override
        })
    }
}

export class BaseMultipleSelectListEditorElementDataStore extends BaseSelectListEditorElementDataStore {
    default_value: number[] = []
    constructor(type: string, select_label: string) {
        super(type, select_label);
        makeObservable(this, {
            default_value: override,
        })
    }
}