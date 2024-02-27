import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import WorkAreaInputBase from "../../../../WorkAreaInputBase";
import {RadioValuesForm} from "../../../ui/CommonFields";

const WorkAreaRadioInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <RadioValuesForm index={index} theme={theme} enableAddButton={false}/>
        </>
    );
};

export default WorkAreaRadioInput