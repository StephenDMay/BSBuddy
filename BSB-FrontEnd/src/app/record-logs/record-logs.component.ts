import { Component, OnInit, ViewChild } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { record } from '../record';
import { MatTableModule, MatTableDataSource, MatTable, } from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { AfterViewInit } from '@angular/core';



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
  columnsToDisplay : string[] = ['bsValue', 'label', 'date', 'time'];
  

  constructor(private bsManagerService : BsManagerService) { 
   
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

  
  
  
  
}


