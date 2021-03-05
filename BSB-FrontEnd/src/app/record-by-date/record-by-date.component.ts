import { Component, OnInit } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { record } from '../record';
import { daily } from '../daily'

@Component({
  selector: 'app-record-by-date',
  templateUrl: './record-by-date.component.html',
  styleUrls: ['./record-by-date.component.css']
})
export class RecordByDateComponent implements OnInit {

  records : record[];
  daily : daily;

  constructor(private bsManagerService : BsManagerService) { }

  ngOnInit(): void {
    this.bsManagerService.getByDate().subscribe(list => {
      this.records = list;
    });


  }

}
