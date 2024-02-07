import React, {FC} from 'react';
import {IBaseEditorElementProps} from "../../../../../interfaces/editor/data/base";
import WorkAreaInputBase from "../../WorkAreaInputBase";
import {CheckboxValuesForm} from "../CommonFields";

const EditCheckboxInput: FC<IBaseEditorElementProps> = ({index, theme}) => {
    return (
        <>
            <WorkAreaInputBase index={index} theme={theme}/>
            <CheckboxValuesForm index={index} theme={theme} enableAddButton={false}/>
        </>
    );
};

export default EditCheckboxInput;