import {SelectBox} from "devextreme-react";
import {useField} from "formik";
import React from "react";

interface Option {
    value: string | number;
    label: string;
}

interface Props {
    value?: string;
    name: string;
    options: Array<Option>;
    disabled?: boolean;
}

export const FormSelect = ({value, name, options, disabled}: Props) => {
    const [field, , helpers] = useField(name);
    const {setValue} = helpers;

    return <SelectBox
        {...field}
        dataSource={options}
        displayExpr="label"
        valueExpr="value"
        defaultValue={options[0].value}
        disabled={disabled}
        onValueChanged={({value}) => {
            setValue(value);
        }}
        itemRender={({label}: Option) => label}
    />;
};
