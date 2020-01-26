import React, {useState} from 'react';
import {PolygonForm} from "../../components/polygon-form";
import {PolygonEntity, PolygonData} from "../../entities/polygon-entity";
import {Severities} from "../../entities/severity";
import polygonFilterApi from "../../services/polygon-filter-api";
import {CustomChart, Props as ChartProps} from "../../components/chart";
import polygonChartConverter from "../../services/polygon-chart-converter";

export const PolygonPage = () => {
    const [chartProps, setChartProps] = useState<ChartProps>({
        descriptions: {},
        data: []
    });
    const entity: PolygonEntity = {
        dataFrom: new Date(0),
        dataTo: new Date(),
        severity: Severities.Unknown,
        category: ''
    };

    const handleSubmit = async (formData: PolygonEntity): Promise<void> => {
        const response: PolygonData = await polygonFilterApi.read(formData);
        const updatedChartProps: ChartProps = polygonChartConverter.straight(response);

        setChartProps(updatedChartProps);
    };

    return (<React.Fragment>
        <PolygonForm entity={entity} onSubmit={handleSubmit} />
        <CustomChart {...chartProps} />
    </React.Fragment>);
};
