import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../interfaces/editor/data/base";
import {Input, Rating} from "@mui/material";
import WorkAreaInputBase from "../WorkAreaInputBase";
import {handleDefaultValueChange, handleRatingLabelChange} from "./handlers";
import {editorStore} from "../../../../store/editorStore";
import {RatingEditorElementDataStore} from "./store";

const EditRatingInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
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

export default EditRatingInput;