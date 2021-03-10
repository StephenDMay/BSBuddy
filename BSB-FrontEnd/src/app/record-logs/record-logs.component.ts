import { Component, OnInit, ViewChild } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { record } from '../record';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-record-logs',
  templateUrl: './record-logs.component.html',
  styleUrls: ['./record-logs.component.css']
})
export class RecordLogsComponent implements OnInit, AfterViewInit {

  records : record[];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) dataSource: MatTableDataSource<record>;
  pageSize: number = 10;
  columnsToDisplay : string[] = ['bsValue', 'label', 'date', 'time', 'action'];
  
  

  constructor(private bsManagerService : BsManagerService, private router : Router) { 
   
  }

  ngOnInit(): void {
    this.bsManagerService.getAllRecords().subscribe(list => {
      this.records = list;
      
    });
    

  
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.records);
    this.dataSource.paginator = this.paginator;
  }

  
  
  deleteRecord(bsValueId : number) {
    confirm("Are you sure you want to delete this record?");
    this.bsManagerService.deleteRecord(bsValueId).subscribe((_) => {this.router.navigate(["/allrecords"])});
    window.location.reload();
  }
  
}


