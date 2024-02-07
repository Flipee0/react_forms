import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {RadioValuesForm} from "../CommonFields";

const EditRadioInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <RadioValuesForm index={index} theme={theme} enableAddButton={false}/>
        </>
    );
};

export default EditRadioInput