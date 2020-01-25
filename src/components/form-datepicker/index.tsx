import {DateBox} from "devextreme-react";
import {useField} from "formik";
import React from "react";

interface Props {
    value?: Date;
    name: string;
    disabled?: boolean;
}

export const FormDatepicker = ({value, name, disabled}: Props) => {
    const [field, , helpers] = useField(name);
    const {setValue} = helpers;

    return <DateBox
        {...field}
        defaultValue={value}
        onValueChanged={({value}) => {
            setValue(value);
        }}
    />;
};
