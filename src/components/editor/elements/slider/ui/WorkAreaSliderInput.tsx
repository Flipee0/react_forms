import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../elementProps";
import {Input, Slider} from "@mui/material";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {handleSliderLabelChange} from "../utils/handlers";
import {SliderEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

const WorkAreaSliderInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as SliderEditorElementDataStore

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

export default WorkAreaSliderInput