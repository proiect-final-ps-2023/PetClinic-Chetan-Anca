import {Component, OnInit} from '@angular/core';
import {OwnerService} from "../../../service/OwnerService";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../../../service/AppointmentService";
import {Appointment} from "../../../model/Appointment";
import {MedicalFacility} from "../../../model/MedicalFacility";
import {MedicalFacilityService} from "../../../service/MedicalFacilityService";

@Component({
  selector: 'app-update-appointment-page',
  templateUrl: './update-appointment-page.component.html',
  styleUrls: ['./update-appointment-page.component.css']
})
export class UpdateAppointmentPageComponent implements OnInit {
  appointment: Appointment = new Appointment();

  appointmentsList: Appointment[] = []


  availableTime: string[] = ["08:00", "08:30", "09:00", "09:30", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
    "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
    "18:30", "19:00", "19:30"]

  chosenDate: string = ""
  chosenTime: string = ""

  chosenFacility1: any;
  chosenFacility2: any;
  numberOfFacilities: any;

  facilities: MedicalFacility[] = []


  constructor(
    private ownerService: OwnerService,
    private appointmentService: AppointmentService,
    private medicalFacilityService: MedicalFacilityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var animalId = Number(param.get('appointmentId'));
      this.getAppointmentById(animalId);
    });

    this.medicalFacilityService.getAllMedicalFacilities().subscribe((facilities) => {
      this.facilities = facilities
    })
  }

  getAppointmentById(animalId: number) {
    this.appointmentService.getAppointmentById(animalId).subscribe((data) => {
      this.appointment = data;
      this.numberOfFacilities = this.appointment.medicalFacilities?.length
      console.log(this.appointment)
    });
  }

  selectedDate() {
    this.availableTime = ["08:00", "08:30", "09:00", "09:30", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
      "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
      "18:30", "19:00", "19:30"]
    if (this.appointment.doctor != null) {
      if (this.appointment.doctor.firstName != null && this.appointment.doctor.lastName != null) {
        let firstName: string = this.appointment.doctor.firstName
        let lastName: string = this.appointment.doctor.lastName
        this.appointmentService.getAllAppointmentsByDoctorName(firstName, lastName).subscribe((appointments) => {
          this.appointmentsList = appointments
          this.appointmentsList.forEach((appointment) => {
            let actualDate = appointment.date?.substr(0, 10)
            if (actualDate == this.chosenDate) {
              let actualTime = appointment.date?.substr(11, 5)
              if (actualTime != null) {
                const indexTime = this.availableTime.indexOf(actualTime)
                this.availableTime.splice(indexTime, 1)
              }
            }
          })
        })
      }
    }

    let toRemove: string[] = []
    this.availableTime.forEach((time) => {
      if (this.appointment.doctor != undefined) {
        if (this.appointment.doctor.startScheduleTime != undefined && this.appointment.doctor.endScheduleTime != undefined) {
          if (time < this.appointment.doctor.startScheduleTime || time >= this.appointment.doctor.endScheduleTime) {
            toRemove.push(time)
          }
        }
      }
    })
    for (let i = 0; i < toRemove.length; i++) {
      this.availableTime.splice(this.availableTime.indexOf(toRemove[i]), 1)
    }
  }

  update() {
    if (this.chosenFacility1 != null && this.chosenFacility1 != "") {
      let found = false;
      this.appointment.medicalFacilities?.forEach((facility) => {
        if (this.chosenFacility1 == facility.name) {
          found = true
        }
      })
      if (found == false) {
        this.facilities.forEach((facility) => {
          if (facility.name == this.chosenFacility1) {
            this.appointment.medicalFacilities?.push(facility)
          }
        })
      } else {
        alert("This facility already exists")
      }
    }
    if (this.chosenFacility2 != null && this.chosenFacility2 != "") {
      let found = false;
      this.appointment.medicalFacilities?.forEach((facility) => {
        if (this.chosenFacility2 == facility.name) {
          found = true
        }
      })
      if (found == false) {
        this.facilities.forEach((facility) => {
          if (facility.name == this.chosenFacility2) {
            this.appointment.medicalFacilities?.push(facility)
          }
        })
      } else {
        alert("This facility already exists")
      }
    }
    console.log(this.appointment.medicalFacilities)
    if (this.chosenTime != "" && this.chosenTime != "") {
      this.appointment.date = this.chosenDate + "T" + this.chosenTime + ":00"
    } else if (this.chosenTime != "") {
      let actualDate = this.appointment.date?.substr(0, 9)
      this.appointment.date = actualDate + "T" + this.chosenTime + ":00"
    } else if (this.chosenDate != "") {
      let actualTime = this.appointment.date?.substr(11, 18)
      this.appointment.date = this.chosenDate + "T" + actualTime
    }
    this.appointmentService.updateAppointment(this.appointment).subscribe(() => {
      this.router.navigate(['owner', 'appointmentsEdit']);
    });
  }
}
