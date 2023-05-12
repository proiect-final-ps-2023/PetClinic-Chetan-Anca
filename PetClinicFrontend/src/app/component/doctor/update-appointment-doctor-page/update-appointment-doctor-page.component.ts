import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../model/Appointment";
import {AppointmentService} from "../../../service/AppointmentService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-appointment-doctor-page',
  templateUrl: './update-appointment-doctor-page.component.html',
  styleUrls: ['./update-appointment-doctor-page.component.css']
})
export class UpdateAppointmentDoctorPageComponent implements OnInit {
  appointment: Appointment = new Appointment();

  appointmentsList: Appointment[] = []


  availableTime: string[] = ["08:00", "08:30", "09:00", "09:30", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
    "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
    "18:30", "19:00", "19:30"]

  chosenDate: string = ""
  chosenTime: string = ""

  constructor(private appointmentService: AppointmentService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var animalId = Number(param.get('appointmentId'));
      this.getAppointmentById(animalId);
    });
  }

  getAppointmentById(animalId: number) {
    this.appointmentService.getAppointmentById(animalId).subscribe((data) => {
      this.appointment = data;
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
    for (var i = 0; i < toRemove.length; i++) {
      this.availableTime.splice(this.availableTime.indexOf(toRemove[i]), 1)
    }
  }

  update() {
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
      console.log(this.appointment)
      this.router.navigate(['doctor', 'appointmentsView']);
    });
  }

}
