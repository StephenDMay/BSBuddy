import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsManagerService } from '../bs-manager.service';
import { food } from '../food';
import { meal } from '../meal';

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

  constructor(private service : BsManagerService, private router : Router) { }

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
            let name = foodName.toString();
            let foodItem = document.createElement("span");
            let carbCount = document.createElement("span");
            let br = document.createElement("br");
            foodItem.textContent = name;
            carbCount.textContent = " | " + carbs;
            document.getElementById("list").appendChild(br);
            document.getElementById("list").appendChild(foodItem);
            document.getElementById("list").appendChild(carbCount);
            document.getElementById("list").appendChild(br);
            
            
            
            
            
        }
    );
  
  }

  addMeal(totalCarbs : string, label : string, ) {
    console.log(totalCarbs);
    let carbs = parseFloat(totalCarbs);
    console.log(carbs);
    let toAdd : meal = {carbs, label}
    this.service.addMeal(toAdd).subscribe();
  }

}


