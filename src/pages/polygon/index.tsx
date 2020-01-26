import React from 'react';
import {PolygonForm} from "../../components/polygon-form";
import {PolygonFilter, PolygonFilterResponse} from "../../entities/polygon-filter";
import {Severities} from "../../entities/severity";
import polygonFilterApi from "../../services/polygon-filter-api";

export const PolygonPage = () => {
    const entity: PolygonFilter = {
        dataFrom: new Date(),
        dataTo: new Date(),
        severity: Severities.High,
        category: ''
    };
    const handleSubmit = async (formData: PolygonFilter): Promise<void> => {
        const response: PolygonFilterResponse = await polygonFilterApi.read(formData);

        console.log(response);
    };

    return <PolygonForm entity={entity} onSubmit={handleSubmit} />;
};
