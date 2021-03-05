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


    // TODO: Print out values!!!!!!!!!!!!!!!!!
    this.bsManagerService.getDailyValues().subscribe(list => {
      this.daily = list;
      let dailyCarbs = document.createElement("span");
      //let dailyAvg = document.createElement("span");
      let dc = this.daily.totalCarbs;
      ;
      //let da = this.daily.avgBS.toString();
      //totalCarbs.textContent = dc;
      //dailyAvg.textContent = da;
      console.log(dc);

      document.getElementById("dayValues").appendChild(dailyCarbs);
      //document.getElementById("dayRecords").appendChild(dailyAvg);
    })
  }

}
