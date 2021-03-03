import { Component, Input, OnInit } from '@angular/core';
import { record } from '../record'
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input()record: record;
  
  constructor() { }

  ngOnInit(): void {
  }

}
