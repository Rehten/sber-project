import React, {useState} from 'react';
import {PolygonForm} from "../../components/polygon-form";
import {PolygonEntity, PolygonData} from "../../entities/polygon-entity";
import {Severities} from "../../entities/severity";
import polygonFilterApi from "../../services/polygon-filter-api";
import {CustomChart, YAxisLine} from "../../components/chart";
import polygonChartConverter from "../../services/polygon-chart-converter";
import {descriptions} from "./descriptions";

export const PolygonPage = () => {
    const [chartData, setChartData] = useState<YAxisLine[]>([]);
    const entity: PolygonEntity = {
        dataFrom: new Date(),
        dataTo: new Date(),
        severity: Severities.High,
        category: 'Category-4'
    };

    const handleSubmit = async (formData: PolygonEntity): Promise<void> => {
        const response: PolygonData = await polygonFilterApi.read(formData);
        const chartDataSource: YAxisLine[] = polygonChartConverter.straight(response).data;

        setChartData(chartDataSource);
    };

    return (<React.Fragment>
        <PolygonForm entity={entity} onSubmit={handleSubmit} />
        <CustomChart data={chartData} descriptions={descriptions} />
    </React.Fragment>);
};
