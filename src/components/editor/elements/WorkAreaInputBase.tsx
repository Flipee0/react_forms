import React from 'react';
import {Input} from "@mui/material";
import {Theme} from "@mui/material/styles";
import {editorStore} from "../../../store/editorStore";
import {IBaseEditorInputsElementData} from "../../../interfaces/editor/data/base";
import {handleDescriptionChange, handleLabelChange} from "./handlers";
import {observer} from "mobx-react-lite";

type Props = {
    index: number,
    theme: Theme
}

const WorkAreaInputBase = observer(({index, theme}: Props) => {
    const element = editorStore.getElementData(index) as IBaseEditorInputsElementData

    return (
        <>
            <Input
                fullWidth
                sx={{ fontSize: theme.typography.h5.fontSize}}
                disableUnderline
                value={element.label}
                onChange={(e) => handleLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <Input
                fullWidth
                sx={{ fontSize: theme.typography.body1.fontSize}}
                disableUnderline
                multiline
                value={element.description}
                onChange={(e) => handleDescriptionChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
        </>
    );
});

export default WorkAreaInputBase;