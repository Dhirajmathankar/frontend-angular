import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill,
  ApexTitleSubtitle
} from 'ng-apexcharts';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-report-automation',
  templateUrl: './report-automation.component.html',
  styleUrls: ['./report-automation.component.css']
})
export class ReportAutomationComponent {



  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Send Volumes',
          data: [300, 400, 350, 500, 490, 600, 700, 690, 900, 800, 750, 850]
        }
      ],
      chart: {
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ['#34D399'] // Green color for the line
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        labels: {
          style: {
            colors: '#A0AEC0' // Gray color for x-axis labels
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
        theme: 'dark'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
          // colorStops: [
          //   {
          //     offset: 0,
          //     color: '#34D399', // Start color of gradient
          //     opacity: 0.7
          //   },
          //   {
          //     offset: 100,
          //     color: '#10B981', // End color of gradient
          //     opacity: 0.2
          //   }
          // ]
        }
      },
      title: {
        text: 'Send Volumes',
        align: 'left',
        style: {
          color: '#A0AEC0' // Gray color for title
        }
      }
    };
  }

  ngOnInit(): void {}

}
