import {IBaseEditorElementData} from "./base";

interface IBaseTextLayoutEditorElementData extends IBaseEditorElementData{
    value: string
}

export interface ILabelLayoutEditorElementData extends IBaseTextLayoutEditorElementData {}
export interface IDescriptionLayoutEditorElementData extends IBaseTextLayoutEditorElementData {}