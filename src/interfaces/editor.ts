import {SvgIconComponent} from "@mui/icons-material";
import {IBaseEditorElementProps} from "./editor/data/base";
import {FC} from "react";

export interface IEditorElement {
    type: string
    control: IEditorElementControl
    edit_component: FC<IBaseEditorElementProps>
    settings_view_component: FC<IBaseEditorElementProps>
}

export interface IEditorElementControl {
    label: string
    icon: SvgIconComponent
}