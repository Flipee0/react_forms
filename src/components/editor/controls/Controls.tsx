import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';
import ControlElement from "./ControlElement";
import Typography from "@mui/material/Typography";
import Group from "../shared/Group";
import {
    checkbox_input,
    description_layout,
    label_layout,
    multiple_select_input,
    radio_input, rating_input, single_select_input, slider_input,
    input_field, switch_input, transfer_input
} from "../../../consts/editorElements";

const Controls = () => {
    return (
        <Stack spacing={2} sx={{position: "sticky", top: 0}}>
            <Typography variant={"h5"} textAlign={"center"}>Tools</Typography>
            <Divider/>
            <Group label={"Layout"}>
                <ControlElement editor_element={label_layout}/>
                <ControlElement editor_element={description_layout}/>
            </Group>
            <Group label={"Input fields"}>
                <ControlElement editor_element={input_field}/>
            </Group>
            <Group label={"Select inputs"}>
                <ControlElement editor_element={radio_input}/>
                <ControlElement editor_element={checkbox_input}/>
                <ControlElement editor_element={single_select_input}/>
                <ControlElement editor_element={multiple_select_input}/>
                <ControlElement editor_element={transfer_input}/>
            </Group>
            <Group label={"Switch"}>
                <ControlElement editor_element={switch_input}/>
            </Group>
            <Group label={"Rating"}>
                <ControlElement editor_element={rating_input}/>
            </Group>
            <Group label={"Slider"}>
                <ControlElement editor_element={slider_input}/>
            </Group>
        </Stack>
    );
};

export default Controls;