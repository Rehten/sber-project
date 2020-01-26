import React from 'react';
import {
    Chart,
    Series,
    ArgumentAxis,
    CommonSeriesSettings,
    Export,
    Legend,
    Margin
} from 'devextreme-react/chart';

interface YAxisLineValues {
    [key: string]: string | number;
}

export interface YAxisLine {
    argumentField: string | number;
    values: YAxisLineValues;
}

interface SeriesData {
    name: string;
    valueField: string | number;
}

export interface Props {
    data: Array<YAxisLine>;
    descriptions: Record<keyof YAxisLineValues, string>;
}

export const CustomChart = ({data, descriptions}: Props) => {
    const dataSource: Record<string, string | number>[] = data.map(yAxisLine => {
        return {
            argumentField: yAxisLine.argumentField,
            ...yAxisLine.values
        };
    });
    const series: Array<SeriesData> = [];

    if (data.length) {
        let seriesTemplate: YAxisLineValues = {};

        for (const series of data) {
            seriesTemplate = {
                ...seriesTemplate,
                ...series.values,
            };
        }

        for (const valueField in seriesTemplate) {
            if (seriesTemplate.hasOwnProperty(valueField)) {
                series.push({
                    name: descriptions[valueField],
                    valueField
                });
            }
        }
    }

    console.log(series, dataSource);

    return (
        <Chart
            palette="Harmony Light"
            title="Population: Age Structure (2000)"
            dataSource={dataSource}
        >
            <CommonSeriesSettings
                argumentField="argumentField"
                type="area"
            />
            {series.map(s => (<Series key={s.name} valueField={s.valueField} name={s.name} />))}
            <Margin bottom={20} />
            <ArgumentAxis valueMarginsEnabled={false} />
            <Legend
                verticalAlignment="bottom"
                horizontalAlignment="center"
            />
            <Export enabled={true} />
        </Chart>
    );
};
