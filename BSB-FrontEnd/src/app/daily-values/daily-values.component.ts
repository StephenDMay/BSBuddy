import { Component, OnInit } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { daily } from '../daily'
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-daily-values',
  templateUrl: './daily-values.component.html',
  styleUrls: ['./daily-values.component.css']
})
export class DailyValuesComponent implements OnInit {

  daily : daily;

  constructor(private bsManagerService : BsManagerService) { }

  ngOnInit(): void {


    this.bsManagerService.getDailyValues().subscribe(list => {
      this.daily = list;
      let dailyC = document.createElement("span");
      let dailyA = document.createElement("span");
      let dailyCarbs = document.createElement("span");
      let b = document.createElement("br");
      let dailyAvg = document.createElement("span");
      let dc = this.daily[0].totalCarbs.toString();
      let avg = this.daily[0].avgBS.toString();

      dailyCarbs.style.fontWeight = "bold";
      dailyAvg.style.fontWeight = "bold";
      if ( this.daily[0].avgBS > 150 || this.daily[0].avgBS < 70) {
        dailyAvg.style.color = "red";
      }
      else {
        dailyAvg.style.color = "green";
      }
      dailyC.style.marginLeft = "3%"
      dailyA.style.marginLeft = "3%"
      dailyC.textContent = "Daily Carb Intake: " 
      dailyCarbs.textContent = dc;
      dailyA.textContent = "   Average Blood Sugar: ";
      dailyAvg.textContent = avg;
      
      
      document.getElementById("dayValues").appendChild(dailyC);
      document.getElementById("dayValues").appendChild(dailyCarbs);
      document.getElementById("dayValues").appendChild(b);
      document.getElementById("dayValues").appendChild(dailyA);
      document.getElementById("dayValues").appendChild(dailyAvg);
    })
  }
}


