import { Component, OnInit } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { record } from '../record';

@Component({
  selector: 'app-record-logs',
  templateUrl: './record-logs.component.html',
  styleUrls: ['./record-logs.component.css']
})
export class RecordLogsComponent implements OnInit {

  records : record[];

  constructor(private bsManagerService : BsManagerService) { }

  ngOnInit(): void {
    this.bsManagerService.getAllRecords().subscribe(list => {
      this.records = list;
    });
  }

}
