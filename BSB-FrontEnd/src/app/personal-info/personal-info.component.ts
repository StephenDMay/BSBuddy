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
    });
  }

}
