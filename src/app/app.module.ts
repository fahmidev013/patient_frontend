import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    PatientDetailsComponent,
    PatientListComponent,
    UpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
