import React, { useEffect } from 'react'
import { createChart, LineData, TimeChartOptions, ColorType, UTCTimestamp, DeepPartial } from 'lightweight-charts';
const OverviewTable: React.FC = () => {
    const chartOptions = {
        layout: {
            textColor: 'black',
            background: {
                type: 'solid', color: 'white'
            }
        }
    };
    function initTable() {
        const chartOptions: DeepPartial<TimeChartOptions> = {
            layout: {
                textColor: 'white',
                background: {
                    type: ColorType.Solid,
                    color: 'black'
                },
                fontSize: 12,
                fontFamily: 'Roboto',
            },
            grid: {
                horzLines: { visible: false },
                vertLines: { visible: false },
            },
            
        };

        const chart = createChart('overview_table', chartOptions);
        const lineSeries = chart.addAreaSeries({ lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'black'});

        const data: LineData[] = [
            { value: 0, time: 1642425322 as UTCTimestamp },
            { value: 8, time: 1642511722 as UTCTimestamp },
            { value: 10, time: 1642598122 as UTCTimestamp },
            { value: 20, time: 1642684522 as UTCTimestamp },
            { value: 3, time: 1642770922 as UTCTimestamp },
            { value: 43, time: 1642857322 as UTCTimestamp },
            { value: 41, time: 1642943722 as UTCTimestamp },
            { value: 43, time: 1643030122 as UTCTimestamp },
            { value: 56, time: 1643116522 as UTCTimestamp },
            { value: 46, time: 1643202922 as UTCTimestamp }
        ];

        lineSeries.setData(data);

        chart.timeScale().fitContent();
    }
    React.useEffect(() => {
        initTable()
    }, [])
    return <div id="overview_table" className='w-100 h-96'>

    </div>
}
export default OverviewTable;