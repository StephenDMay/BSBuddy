import { Component, OnInit } from '@angular/core';
import {GoogleChartsModule} from 'angular-google-charts';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {

  title = 'Daily Values';
  type = 'LineChart';
  data = [
    ['12:00', 145],
    ['14:00', 173]
  ];
  options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Blood Sugar'
    },
    pointSize: 5,
    curveType: 'function', 
    legend: { position: 'bottom' }
  };
  width = 550;
  height = 400;


  constructor() { }

  ngOnInit(): void {
  }

}
