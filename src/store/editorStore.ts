import {makeAutoObservable} from 'mobx'
import {FC} from "react";
import {IBaseEditorElementProps} from "../interfaces/editor/data/base";
import {all_editor_elements} from "../consts/editorElements";
import {makeObservable, observable} from "mobx"

export class EditorStore {
    elements: ElementStore[] = []
    selected: number | null = null

    constructor() {
        makeAutoObservable(this)
    }

    addElement(element: BaseEditorElementDataStore) {
        const new_length = this.elements.push(new ElementStore(element))
        this.selected = new_length - 1
    }

    getElement(index: number) {
        return this.elements[index]
    }

    getElementData(index: number) {
        return this.getElement(index).data
    }
}

export const editorStore = new EditorStore()


// TODO: move out

export type EditorElementConfig = {
    type: string
    edit_component: FC<IBaseEditorElementProps>
    settings_view_component: FC<IBaseEditorElementProps>
}

export class ElementStore {
    editor_config: EditorElementConfig
    data: BaseEditorElementDataStore

    constructor(data: BaseEditorElementDataStore) {
        makeObservable(this, {
            editor_config: observable,
            data: observable
        })
        this.data = data
        this.editor_config = all_editor_elements.find((element) => data.type === element.type)!
    }
}

export class BaseEditorElementDataStore {
    type: string
    constructor(type: string) {
        makeObservable(this, {
            type: observable,
        })
        this.type = type
    }
}

export class BaseEditorInputsElementDataStore extends BaseEditorElementDataStore {
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