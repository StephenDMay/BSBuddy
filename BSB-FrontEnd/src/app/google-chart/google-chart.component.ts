import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {GoogleChartsModule} from 'angular-google-charts';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { BsManagerService } from '../bs-manager.service';
import { daily } from '../daily';
import {record} from '../record';
import { Chart } from 'chart.js';
import { map, filter, switchMap } from 'rxjs/operators';
import { Time } from '@angular/common';
import { TemplateBindingParseResult } from '@angular/compiler';


@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {
  
  bsValue : record["bsValue"];
  records : record[];
  time : record["time"];
  daily: daily;
  chart: any;
  record: record;


  constructor(private bsManagerService : BsManagerService) { 
  }

  ngOnInit(): void {
    this.bsManagerService.getByDate().subscribe(list => {
      this.records = list;
      
      
    });

    this.bsManagerService.getChart()
      .subscribe(res => {

        let tempBS = res['map'](res => res.bsValue);
        let tempTime = res['map'](res=> res.time);
        let revBS = tempBS.reverse();
        let revTime = tempTime.reverse();

        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: revTime,
              datasets: [ {
                data: revBS,
                borderColor: 'blue',
                fill: false,
                backgroundColor: 'red'
              },
                ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true,
                  
                }],
                yAxes: [{
                  display: true
                }]
              },
              layout: {
                padding: {
                  left: 10,
                  top: 30,
                  right: 10
                }
              }
              
            }
        })
      })
  }

//   title = 'Daily Values';
//   type = 'LineChart';
//   data = [['12:00', 104],
// ['15:00', 93]]
//   options = {
//     hAxis: {
//       title: 'Time'
//     },
//     vAxis: {
//       title: 'Blood Sugar'
//     },
//     pointSize: 5,
//     curveType: 'function', 
//     legend: { position: 'bottom' }
//   };
//   width = 550;
//   height = 400;

}
