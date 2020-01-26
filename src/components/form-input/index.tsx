import {useField} from "formik";
import {TextBox} from "devextreme-react";
import React from "react";

interface Props {
    value?: string;
    name: string;
    disabled?: boolean;
}

export const FormInput = ({value, name}: Props) => {
    const [field] = useField(name);

    return <TextBox
        {...field}
        defaultValue={value}
        onChange={({event}) => field.onChange(event)}
    />;
};
