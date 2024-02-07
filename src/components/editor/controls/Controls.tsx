import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';
import Typography from "@mui/material/Typography";
import Group from "../shared/Group";
import {ControlInputField} from "../elements/inputField";
import ControlLabelLayout from "../elements/layout/labelLayout/ControlLabelLayout";
import ControlDescriptionLayout from "../elements/layout/descriptionLayout/ControlDescriptionLayout";
import ControlRadioInput from "../elements/selectList/radioInput/ControlRadioInput";
import ControlCheckboxInput from "../elements/selectList/checkBoxInput/ControlCheckboxInput";
import ControlSingleSelectInput from "../elements/selectList/singleSelectInput/ControlSingleSelectInput";
import ControlMultipleSelectInput from "../elements/selectList/multipleSelect/ControlMultipleSelectInput";
import ControlTransferInput from "../elements/selectList/transferInput/ControlTransferInput";
import ControlSwitchInput from "../elements/switch/ControlSwitchInput";
import ControlRatingInput from "../elements/rating/ControlRatingInput";
import ControlSliderInput from "../elements/slider/ControlSliderInput";

const Controls = () => {
    return (
        <Stack spacing={2} sx={{position: "sticky", top: 0}}>
            <Typography variant={"h5"} textAlign={"center"}>Tools</Typography>
            <Divider/>
            <Group label={"Layout"}>
                <ControlLabelLayout/>
                <ControlDescriptionLayout/>
            </Group>
            <Group label={"Input fields"}>
                <ControlInputField/>
            </Group>
            <Group label={"Select inputs"}>
                <ControlRadioInput/>
                <ControlCheckboxInput/>
                <ControlSingleSelectInput/>
                <ControlMultipleSelectInput/>
                <ControlTransferInput/>
            </Group>
            <Group label={"Switch"}>
                <ControlSwitchInput/>
            </Group>
            <Group label={"Rating"}>
                <ControlRatingInput/>
            </Group>
            <Group label={"Slider"}>
                <ControlSliderInput/>
            </Group>
        </Stack>
    );
};

export default Controls;