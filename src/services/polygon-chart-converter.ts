import {PolygonData} from "../entities/polygon-entity";
import {Straight} from "../types/services/straight";
import {Props as ChartProps, YAxisLine} from "../components/chart/index";
import timeConverter from "./time-converter";
import {Time} from "../entities/time";

export class PolygonChartConverter implements Straight<PolygonData, ChartProps> {
    straight({entities}: PolygonData): ChartProps {
        const descriptions: Record<string, string> = {};
        const data: YAxisLine[] = entities
            .map(polygonEntity => {
            const {dataFrom} = polygonEntity;
            const {day, month, year} = timeConverter.reverse(new Time(dataFrom));
            const argumentField: string = `${day}/${month}/${year}`;

            return {
                argumentField,
                values: {
                    [polygonEntity.category]: polygonEntity.severity
                }
            };
        });
        // жесткие костыли - не повторять
        const groupedByDate: Record<string, YAxisLine[]> = {};
        const resultedData: YAxisLine[] = [];

        for (const yAxis of data) {
            const year: string = (yAxis.argumentField).toString().split('/')[2];
            if (groupedByDate[year]) {
                groupedByDate[year].push({
                    ...yAxis,
                    argumentField: year
                })
            } else {
                groupedByDate[year] = [{
                    ...yAxis,
                    argumentField: year
                }];
            }
        }

        for (const date in groupedByDate) {
            const rslt: YAxisLine = groupedByDate[date].reduce((prev, cur) => {
                return {
                    argumentField: date,
                    values: {
                        ...prev.values,
                        ...cur.values,
                    }
                }
            });

            resultedData.push(rslt);
        }

        for (let entity of entities) {
            const isHasnotDescription: boolean = (!descriptions[entity.category]);
            if (isHasnotDescription) {
                descriptions[entity.category] = entity.category;
            }
        }

        return {
            data: resultedData.sort((prev, cur) => {
                return Number(prev.argumentField) - Number(cur.argumentField);
            }),
            descriptions
        };
    }
}

const polygonChartConverter: PolygonChartConverter = new PolygonChartConverter();

export default polygonChartConverter;
