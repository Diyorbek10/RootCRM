import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Radarchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Telegram',
                data: [8, 5, 3, 4, 1, 2, 5,7,1,6,5,2],
            }, {
                name: 'Instagram',
                data: [2, 3, 4, 8, 2, 8,3, 5, 3, 4, 1, 2],
            }, {
                name: 'Facebook',
                data: [4, 6, 8, 3, 3, 1,2, 3, 4, 8, 2, 8],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                colors: ['#17a2b8', '#6435c9', '#45aaf2'],
                stroke: {
                    width: 0
                },
                fill: {
                    opacity: 0.4
                },
                markers: {
                    size: 0
                },
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun','Jul','Aug','Sent','Oct','Nov','Dec']
            }
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
        );
    }
}

export default Radarchart;
