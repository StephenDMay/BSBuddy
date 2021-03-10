import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsManagerService } from '../bs-manager.service';
import { info } from '../info';

@Component({
  selector: 'app-edit-pi',
  templateUrl: './edit-pi.component.html',
  styleUrls: ['./edit-pi.component.css']
})
export class EditPiComponent implements OnInit {
  name : string;
  height : number;
  weight : number;
  minBS : number;
  maxBS : number;

  constructor(private service: BsManagerService, private router : Router) { }

  ngOnInit(): void {
  }


  editHeight() {
    let toEdit : info = {height : this.height}
    this.service.editHeight(toEdit).subscribe((_) => {this.router.navigate(["/viewinfo"])});
  }

  editWeight() {
    let toEdit : info = {weight : this.weight}
    this.service.editWeight(toEdit).subscribe((_) => {this.router.navigate(["/viewinfo"])});
  }
}
