import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import {HttpClientModule} from '@angular/common/http';
import { RecordLogsComponent } from './record-logs/record-logs.component';
import { AddRecordComponent } from './add-record/add-record.component';
import {FormsModule} from '@angular/forms';
import { RecordByDateComponent } from './record-by-date/record-by-date.component';
import { FoodTrackerComponent } from './food-tracker/food-tracker.component';
import { DailyValuesComponent } from './daily-values/daily-values.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditPiComponent } from './edit-pi/edit-pi.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { BsManagerService } from './bs-manager.service';







@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordLogsComponent,
    AddRecordComponent,
    RecordByDateComponent,
    FoodTrackerComponent,
    DailyValuesComponent,
    PersonalInfoComponent,
    EditPiComponent,
    GoogleChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule,
    GoogleChartsModule,

  ],
  providers: [BsManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
