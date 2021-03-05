import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { FoodTrackerComponent } from './food-tracker/food-tracker.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RecordByDateComponent } from './record-by-date/record-by-date.component';
import { RecordLogsComponent } from './record-logs/record-logs.component';

const routes: Routes = [{path: "allrecords", component: RecordLogsComponent},
{path: "bloodsugar", component: AddRecordComponent},
{path: "day", component: RecordByDateComponent},
{path: "food", component: FoodTrackerComponent},
{path: "viewinfo", component : PersonalInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
