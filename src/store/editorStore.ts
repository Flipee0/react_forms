import {IBaseEditorElementData} from "../interfaces/editor/data/base";
import {makeAutoObservable} from 'mobx'

export class EditorStore {
    elements: ElementStore[] = []
    selected: number | null = null

    constructor() {
        makeAutoObservable(this)
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

export class ElementStore {
    type: string
    data: IBaseEditorElementData

    constructor(type: string, data: IBaseEditorElementData) {
        makeAutoObservable(this)
        this.type = type
        this.data = data
    }
}
