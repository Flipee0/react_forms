import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../elementProps";
import WorkAreaInputBase from "../../../../WorkAreaInputBase";
import {CheckboxValuesForm} from "../../../ui/CommonFields";

const WorkAreaCheckboxInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <CheckboxValuesForm index={index} theme={theme} enableAddButton={false}/>
        </>
    );
};

export default WorkAreaCheckboxInput