import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../interfaces/editor/data/base";
import {Input, Slider} from "@mui/material";
import WorkAreaInputBase from "../WorkAreaInputBase";
import {handleSliderLabelChange} from "./handlers";
import {editorStore} from "../../../../store/editorStore";
import {ISliderEditorElementData} from "../../../../interfaces/editor/data/sliders";

const EditSliderInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as ISliderEditorElementData

    const handleDefaultValueChange = (event: Event, new_value: number | number[]) => {
        element.default_value = new_value
    }

    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <Input
                fullWidth
                sx={{ fontSize: theme.typography.body1.fontSize}}
                disableUnderline
                value={element.slider_label}
                onChange={(e) => handleSliderLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <Slider
                value={element.default_value}
                onChange={handleDefaultValueChange}
                min={element.min_value}
                max={element.max_value}
                step={element.step}
                marks={element.marks}
                valueLabelDisplay={element.value_label_display}
            />
        </>
    );
};

export default EditSliderInput;