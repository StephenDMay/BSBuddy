import { Component, OnInit } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { info } from '../info';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  info : info;
  

  constructor(private service : BsManagerService) { }

  ngOnInit(): void {
    this.service.getInfo().subscribe(list => {
      this.info = list;
      let height = this.info[0].height;
      let weight = this.info[0].weight;

      let kg = weight * 0.453592;
      let meters = height * 0.0254;

      let bmi = (kg / (meters * meters))
      console.log(bmi);
      let rounded = bmi.toFixed(2);
      let roundNum = parseFloat(rounded);
      let rBmi = document.createElement("span");
      rBmi.textContent = rounded;

      if ( roundNum > 24.9 || roundNum < 18.5) {
        rBmi.style.color = "red";

      }
      else {
        rBmi.style.color = "green";
      } 
      
      document.getElementById("info").appendChild(rBmi)
    });
    
  }

}
