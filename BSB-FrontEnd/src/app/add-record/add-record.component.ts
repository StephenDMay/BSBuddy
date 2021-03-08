import { getLocaleDateFormat, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsManagerService } from '../bs-manager.service';
import { record } from '../record';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

    bsValue: number;
    
  

  constructor(private service: BsManagerService, private router : Router) { }

  ngOnInit(): void {
  }

  addRecord( label : string) {
    let toAdd : record = {bsValue : this.bsValue, label}
    this.service.addRecord(toAdd).subscribe((_) => {this.router.navigate(["/day"])});

  }

}
