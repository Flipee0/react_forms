import React, {ChangeEventHandler, FC} from 'react';
import {IBaseEditorElementProps} from "../../../../interfaces/editor/data/base";
import {Button, FormControlLabel, Switch, ToggleButton, ToggleButtonGroup} from "@mui/material";
import TextField from "@mui/material/TextField";
import {SliderEditorElementDataStore, SliderMark} from "./store";
import {editorStore} from "../../../../store/editorStore";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SettingsInputBase from "../SettingsInputBase";
import {handleSliderLabelChange} from "./handlers";

const SettingsSliderInput: FC<IBaseEditorElementProps> = ({index}) => {
    const element = editorStore.getElementData(index) as SliderEditorElementDataStore

    const marks_type: boolean | "custom" = (typeof element.marks === "boolean") ? element.marks : "custom"

    const handleValueLabelChange = (e: React.MouseEvent<HTMLElement>, newValue: "on" | "auto" | "off") => {
        element.value_label_display = newValue
    }

    const handleMarksTypeChange = (e: React.MouseEvent<HTMLElement>, newValue: boolean | "custom") => {
        if (newValue === "custom") {
            element.marks = []
        }
        else {
            if (element.step == null) {
                element.step = 1
            }
            element.marks = newValue
        }
    }

    const handleAddMark = () => {
        if (marks_type === "custom") {
            element.marks = [
                ...(element.marks as SliderMark[]), {label: "Label", value: element.min_value}
            ]
        }
    }

    const markLabelControls = (element_index: number) => {
        const slider_mark = (element.marks as SliderMark[])[element_index]
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            (element.marks as SliderMark[])[element_index] = {
                label: e.target.value,
                value: slider_mark.value
            }
        }

        return {value: slider_mark.label, onChange}
    }
    const markValueControls = (element_index: number) => {
        const slider_mark = (element.marks as SliderMark[])[element_index]
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            (element.marks as SliderMark[])[element_index] = {
                label: slider_mark.label,
                value: Number.parseInt(e.target.value)
            }
        }

        return {value: slider_mark.value, onChange}
    }

    const handleToggleNullStep: ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.step = e.target.checked ? null : 1
    }

    const handleToggleRanged: ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isRanged = e.target.checked
        element.default_value = isRanged ? [element.min_value, element.max_value] : element.min_value
        element.isRanged = isRanged
    }

    const handleLeftValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (element.default_value as number[])[0] = Number(e.target.value)
    }

    const handleRightValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (element.default_value as number[])[1] = Number(e.target.value)
    }

    const handleSliderValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.default_value = Number(e.target.value)
    }

    const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        element.step = Number(e.target.value)
    }

    const min_range_controls = {
        value: element.min_value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const new_value = Number(e.target.value)
            if (element.isRanged) {
                element.default_value = [new_value, (element.default_value as number[])[1]]
            }
            else {
                element.default_value = new_value
            }
            element.min_value = new_value
        }
    }

    const max_range_controls = {
        value: element.max_value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const new_value = Number(e.target.value)
            if (element.isRanged) {
                element.default_value = [(element.default_value as number[])[0], new_value]
            }
            else {
                element.default_value = new_value
            }
            element.max_value = new_value
        }
    }

    return (
        <>
            <SettingsInputBase index={index}/>
            <TextField
                label="Slider label"
                variant="standard"
                fullWidth
                value={element.slider_label}
                onChange={(e) => handleSliderLabelChange(e as React.ChangeEvent<HTMLInputElement>, index)}
            />
            <FormControlLabel control={<Switch value={element.isRanged} onChange={handleToggleRanged}/>} label="Ranged slider" />
            {element.isRanged &&
                <>
                    <TextField
                        label="Left value"
                        variant="standard"
                        type={"number"}
                        fullWidth
                        value={(element.default_value as number[])[0]}
                        onChange={handleLeftValueChange}
                    />
                    <TextField
                        label="Right Value"
                        variant="standard"
                        type={"number"}
                        fullWidth
                        value={(element.default_value as number[])[1]}
                        onChange={handleRightValueChange}
                    />
                </>
            }
            {!element.isRanged &&
                <TextField
                    label="Value"
                    variant="standard"
                    type={"number"}
                    fullWidth
                    value={element.default_value}
                    onChange={handleSliderValueChange}
                />
            }
            <TextField
                label="Min value"
                variant="standard"
                type={"number"}
                fullWidth
                {...min_range_controls}
            />
            <TextField
                label="Max value"
                variant="standard"
                type={"number"}
                fullWidth
                {...max_range_controls}
            />
            {element.step != null &&
                <TextField
                    label="Step"
                    variant="standard"
                    type={"number"}
                    fullWidth
                    value={element.step}
                    onChange={handleStepChange}
                />
            }
            <Typography
                variant={"body1"}
            >
                Value label
            </Typography>
            <ToggleButtonGroup
                value={element.value_label_display}
                exclusive
                onChange={handleValueLabelChange}
                aria-label="text alignment"
                fullWidth
            >
                <ToggleButton value="on">Always visible</ToggleButton>
                <ToggleButton value="auto">Visible on focus</ToggleButton>
                <ToggleButton value="off">Hidden</ToggleButton>
            </ToggleButtonGroup>
            <Typography
                variant={"body1"}
            >
                Marks
            </Typography>
            <ToggleButtonGroup
                value={marks_type}
                exclusive
                onChange={handleMarksTypeChange}
                fullWidth
            >
                <ToggleButton value={true}>Marks every step</ToggleButton>
                <ToggleButton value={false}>Disable marks</ToggleButton>
                <ToggleButton value="custom">Custom marks</ToggleButton>
            </ToggleButtonGroup>
            {marks_type === "custom" &&
                <Stack spacing={2}>
                    <Typography
                        variant={"body1"}
                    >
                        Marks list
                    </Typography>
                    <FormControlLabel control={<Switch value={element.step == null} onChange={handleToggleNullStep}/>} label="Slider can only stay on marks" />
                    {(element.marks as SliderMark[]).map((mark, mark_index) =>
                        <Stack spacing={2} direction={"row"}>
                            <TextField
                                label="Label"
                                variant="standard"
                                fullWidth
                                {...markLabelControls(mark_index)}
                            />
                            <TextField
                                label="Value"
                                variant="standard"
                                type={"number"}
                                fullWidth
                                {...markValueControls(mark_index)}
                            />
                        </Stack>
                    )}
                    <Button onClick={handleAddMark}>
                        Add mark
                    </Button>
                </Stack>
            }
        </>
    );
};

export default SettingsSliderInput;