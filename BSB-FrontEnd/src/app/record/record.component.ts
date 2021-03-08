import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { record } from '../record'
import { MatTableModule, MatTableDataSource,  } from '@angular/material/table'
import { RecordLogsComponent } from '../record-logs/record-logs.component';
import { data } from 'jquery';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input()record: record;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {

  }

  
}
