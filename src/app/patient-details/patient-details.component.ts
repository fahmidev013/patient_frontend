import { Patient } from '../patient';
import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../patient.service';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  id: number;
  patient: Patient;

  constructor(private route: ActivatedRoute,private router: Router,
    private patientService: PatientService) { }

  ngOnInit() {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];
    
    this.patientService.getPatient(this.id)
      .subscribe(data => {
        console.log(data)
        this.patient = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['patients']);
  }
}
