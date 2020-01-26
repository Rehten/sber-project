import {Formik} from 'formik';
import React from "react";
import {PolygonEntity} from "../../entities/polygon-entity";
import {FormInput} from "../form-input";
import {FormSelect} from "../form-select";
import {SeveritiesText} from "../../entities/severity";
import {FormDatepicker} from "../form-datepicker";
import {severities} from "./severities";
import classes from "./index.module.css"
import {Button} from "devextreme-react";

interface Props {
    entity: PolygonEntity;
    onSubmit: (output: PolygonEntity) => Promise<void>;
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
                <form className={classes.polygonForm} onSubmit={handleSubmit}>
                    <div>
                        <FormDatepicker name="dataFrom" />
                        <FormDatepicker name="dataTo" />
                        <FormSelect name="severity" options={categoryOptions} />
                        <FormInput name="category" />
                    </div>
                    <div style={{marginTop: 20, minHeight: 35}}>
                        <Button
                            useSubmitBehavior
                            width={120}
                            text="Contained"
                            type="success"
                            stylingMode="contained"
                        >Submit</Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};
