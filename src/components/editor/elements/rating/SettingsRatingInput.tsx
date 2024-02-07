import React, {ChangeEventHandler, FC} from 'react';
import {IBaseEditorElementProps} from "../../../../interfaces/editor/data/base";
import {Box, Rating} from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SettingsInputBase from "../SettingsInputBase";
import {editorStore} from "../../../../store/editorStore";
import {handleDefaultValueChange, handleRatingLabelChange} from "./handlers";
import {RatingEditorElementDataStore} from "./store";

const SettingsRatingInput: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as RatingEditorElementDataStore

    const handleMaxRatingChange: ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.max_rating = Number.parseInt(e.target.value)
        element.default_value = null
    }

    return (
        <>
            <SettingsInputBase index={index}/>
            <TextField
                label="Input label"
                variant="standard"
                fullWidth
                value={element.rating_label}
                onChange={(e) => handleRatingLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <Typography variant="body1">Default value</Typography>
            <Box>
                <Rating
                    max={element.max_rating}
                    value={element.default_value}
                    onChange={(e, value) => handleDefaultValueChange(e, value, index)}
                />
            </Box>
            <TextField
                label="Max rating"
                type={"number"}
                variant="standard"
                fullWidth
                value={element.max_rating}
                onChange={handleMaxRatingChange}
            />
        </>
    );
};

export default SettingsRatingInput;