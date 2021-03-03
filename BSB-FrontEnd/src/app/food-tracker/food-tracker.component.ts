import { Component, OnInit } from '@angular/core';
import { BsManagerService } from '../bs-manager.service';
import { food } from '../food';

let total = 0;

@Component({
  selector: 'app-food-tracker',
  templateUrl: './food-tracker.component.html',
  styleUrls: ['./food-tracker.component.css']
})
export class FoodTrackerComponent implements OnInit {
  food : food;
  carbs: number;
  name: string;

  constructor(private BsManagerService : BsManagerService) { }

  ngOnInit(): void {
    
  }

  findFood(): void {
  
    // add reset function if needed
  
    let foodName = $("#search").val();
    
  
  
    $.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=SohihGmRVzAtcLPY0c3Yo2SQsWE8V2992IbSe4VT&query=${foodName}`,
        function (data, textStatus, jqXHR) {
            let carbs = `${data.foods[0].foodNutrients[2].value}`;
            
            document.getElementById("carbs").textContent = carbs;
            console.log(data);
            
            let carbNum = parseFloat(carbs);
            total += carbNum;
            let output = total.toString();
            document.getElementById("totalCarbs").textContent = output;
            
        }
    );
  
  }

}


