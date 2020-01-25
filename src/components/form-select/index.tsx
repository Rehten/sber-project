import {SelectBox, TextBox} from "devextreme-react";
import {useField} from "formik";
import React from "react";

interface Option {
    value: string | number;
    label: string;
}

interface Props {
    value?: string;
    name: string;
    options: Array<Option>
    disabled?: boolean;
}

export const FormSelect = ({value, name, options, disabled}: Props) => {
    const [field, , helpers] = useField(name);
    const {setValue} = helpers;

    return <SelectBox
        {...field}
        defaultValue={value}
        onValueChanged={({value}) => {
            setValue(value.value);
        }}
        dataSource={options}
        disabled={disabled}
        itemRender={({label}: Option) => label}
        fieldRender={(option: Option) => <TextBox defaultValue={option ? option.label : "Select..."} readOnly />}
    />;
};
