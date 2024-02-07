import {Theme} from "@mui/material/styles";

export interface IBaseEditorElementData {

}

export interface IBaseEditorInputsElementData extends IBaseEditorElementData {
    required: boolean
    default_value: any
    label: string
    description: string
}

export interface IEditorElementData {
    type: string
    data: IBaseEditorElementData
}

export interface IBaseEditorElementProps {
    index: number
    theme: Theme
}