import {PolygonData} from "../entities/polygon-entity";
import {Straight} from "../types/services/straight";
import {Props as ChartProps} from "../components/chart/index";

export class PolygonChartConverter implements Straight<PolygonData, ChartProps> {
    straight({entities}: PolygonData): ChartProps {
        return {
            data: [
                {
                    argumentField: '2011',
                    values: {
                        abibas: 123,
                        nike: 234
                    }
                },
                {
                    argumentField: '2012',
                    values: {
                        abibas: 345,
                        nike: 789
                    }
                },
                {
                    argumentField: '2013',
                    values: {
                        abibas: 123,
                        nike: 678
                    }
                }],
            descriptions: {
                abibas: 'Четкая пацанская фирма',
                nike: 'Для смузихлебов'
            }
        };
    }
}

const polygonChartConverter: PolygonChartConverter = new PolygonChartConverter();

export default polygonChartConverter;
