import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../elementProps";
import {Input, Rating} from "@mui/material";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {handleDefaultValueChange, handleRatingLabelChange} from "../utils/handlers";
import {RatingEditorElementDataStore} from "../model/store";
import editorStore from "../../../model/editorStore";

export const WorkAreaRatingInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    const element = editorStore.getElementData(index) as RatingEditorElementDataStore

    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <Input
                fullWidth
                sx={{ fontSize: theme.typography.body1.fontSize}}
                disableUnderline
                multiline
                value={element.rating_label}
                onChange={(e) => handleRatingLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <Rating
                max={element.max_rating}
                value={element.default_value}
                onChange={(e, value) => handleDefaultValueChange(e, value, index)}
            />
        </>
    );
};