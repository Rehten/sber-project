import React from 'react';
import {PolygonForm} from "../../components/polygon-form";
import {PolygonFilter} from "../../entities/polygon-filter";
import {Severities} from "../../entities/severity";

export const PolygonPage = () => {
    const entity: PolygonFilter = {
        dataFrom: new Date(),
        dataTo: new Date(),
        severity: Severities.High,
        category: '123'
    };
    const handleSubmit = async (formData: PolygonFilter): Promise<void> => {
        console.log(formData);
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(formData);
            }, 1000)
        });
    };

    return <PolygonForm entity={entity} onSubmit={handleSubmit} />;
};
