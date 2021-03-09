import { Component, OnInit, ViewChild } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { record } from '../record';
import { daily } from '../daily';
import { MatTableModule, MatTableDataSource, MatTable, } from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-record-by-date',
  templateUrl: './record-by-date.component.html',
  styleUrls: ['./record-by-date.component.css']
})
export class RecordByDateComponent implements OnInit, AfterViewInit {

  records : record[];
  daily : daily;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) dataSource: MatTableDataSource<record>;
  columnsToDisplay : string[] = ['bsValue', 'label', 'date', 'time'];

  constructor(private bsManagerService : BsManagerService) { }

  ngOnInit(): void {
    this.bsManagerService.getByDate().subscribe(list => {
      this.records = list;
    });


  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.records);
    this.dataSource.paginator = this.paginator;
  }


}
