import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';
import Typography from "@mui/material/Typography";
import Group from "../shared/Group";
import ControlLabelLayout from "../elements/layout/elements/labelLayout/ui/ControlLabelLayout";
import ControlDescriptionLayout from "../elements/layout/elements/descriptionLayout/ui/ControlDescriptionLayout";
import ControlInputField from "../elements/inputField/ui/ControlInputField";
import ControlRadioInput from "../elements/selectList/elements/radioInput/ui/ControlRadioInput";
import ControlCheckboxInput from "../elements/selectList/elements/checkBoxInput/ui/ControlCheckboxInput";
import ControlSingleSelectInput from "../elements/selectList/elements/singleSelectInput/ui/ControlSingleSelectInput";
import ControlMultipleSelectInput from "../elements/selectList/elements/multipleSelect/ui/ControlMultipleSelectInput";
import ControlTransferInput from "../elements/selectList/elements/transferInput/ui/ControlTransferInput";
import ControlSwitchInput from "../elements/switch/ui/ControlSwitchInput";
import {ControlRatingInput} from "../elements/rating/ui/ControlRatingInput";
import ControlSliderInput from "../elements/slider/ui/ControlSliderInput";

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