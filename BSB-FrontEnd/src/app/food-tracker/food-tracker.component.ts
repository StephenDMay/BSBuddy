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
            
            // document.getElementById("carbs").textContent = carbs;
            console.log(data);
            
            let carbNum = parseFloat(carbs);
            total += carbNum;
            let name = foodName.toString();
            let totStr = total.toString();
            let totalCarbs = document.createElement("span");
            totalCarbs.id = "totalCarbs";
            document.getElementById("totalCarbs").textContent = totStr;
            document.getElementById("totalCarbs").hidden = true;
            document.getElementById("tableBody").innerHTML += `
              <tr>
                <td>${name}</td>
                <td>${carbs}</td>
              </tr>
            `;

            document.getElementById("tableFoot").innerHTML = `
            <tr>
              <th> Total </th>
              <td> ${total} </td>
            </tr>
            `
            
            
        }
    );
  
  }

  

  addMeal(totalCarbs : string, label : string, ) {
    console.log(totalCarbs);
    let carbs = parseFloat(totalCarbs);
    console.log(carbs);
    let toAdd : meal = {carbs, label}
    this.service.addMeal(toAdd).subscribe((_) => {this.router.navigate(["/day"])});
  }

}


