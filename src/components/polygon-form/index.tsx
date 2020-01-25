import {Formik} from 'formik';
import React from "react";
import {PolygonFilter} from "../../entities/polygon-filter";
import {FormInput} from "../form-input";
import {FormSelect} from "../form-select";
import {SeveritiesText} from "../../entities/severity";
import {FormDatepicker} from "../form-datepicker";
import {severities} from "./severities";

interface Props {
    entity: PolygonFilter;
    onSubmit: (output: PolygonFilter) => Promise<void>;
}

export const PolygonForm = ({entity, onSubmit}: Props) => {
    const categoryOptions = severities.map(severity => {
        return {
            value: severity,
            label: SeveritiesText[severity]
        };
    });

    return (
        <Formik
            initialValues={entity}
            onSubmit={onSubmit}
        >
            {({
                  handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                    <FormDatepicker name="dataFrom" />
                    <FormDatepicker name="dataTo" />
                    <FormSelect name="severity" options={categoryOptions} />
                    <FormInput name="category" />
                    <button type="submit">Submit!!!</button>
                </form>
            )}
        </Formik>
    );
};
