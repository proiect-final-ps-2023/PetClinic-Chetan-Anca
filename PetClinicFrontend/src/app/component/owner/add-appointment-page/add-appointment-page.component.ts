import {Component, OnInit} from '@angular/core';
import {Animal} from "../../../model/Animal";
import {Owner} from "../../../model/Owner";
import {AnimalService} from "../../../service/AnimalService";
import {OwnerService} from "../../../service/OwnerService";
import {Router} from "@angular/router";
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";
import {AppointmentService} from "../../../service/AppointmentService";
import {Appointment} from "../../../model/Appointment";
import {MedicalFacilityService} from "../../../service/MedicalFacilityService";
import {MedicalFacility} from "../../../model/MedicalFacility";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-add-appointment-page',
  templateUrl: './add-appointment-page.component.html',
  styleUrls: ['./add-appointment-page.component.css']
})
export class AddAppointmentPageComponent implements OnInit {
  token: any;
  animal: Animal = new Animal();
  owner: Owner = new Owner();
  doctor: Doctor = new Doctor()
  appointment: Appointment = new Appointment();
  doctorName: string = ""
  doctorNamesList: string[] = []
  animalName: string = ""
  animalNamesList: string[] = []
  chosenDate: string = ""
  chosenTime: string = ""
  appointmentsList: Appointment[] = []
  availableTime: string[] = ["08:00", "08:30", "09:00", "09:30", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
    "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
    "18:30", "19:00", "19:30"]

  facilities: MedicalFacility[] = []

  chosenFacility1: any;
  chosenFacility2: any;
  chosenFacility3: any;

  chosenFacilities: MedicalFacility[] = []


  constructor(
    private animalService: AnimalService,
    private ownerService: OwnerService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private medicalFacilityService: MedicalFacilityService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const id = tokenDecoded.id;
    console.log(id)
    if (id != null) {
      this.animalService.getAllAnimalsByOwnerId(parseInt(id, 10)).subscribe((animals) => {
        animals.forEach((animal) => {
          if (animal.name != null) {
            this.animalNamesList.push(animal.name)
          }
        })
      })
    }
    this.doctorService.getAllDoctors().subscribe((doctors) => {
      doctors.forEach((doctor) => {
        this.doctorNamesList.push(doctor.firstName + " " + doctor.lastName)
      })
    })

    this.medicalFacilityService.getAllMedicalFacilities().subscribe((facilities) => {
      this.facilities = facilities
    })
  }

  selectedDoctor() {
    let splitter = this.doctorName.split(" ", 2)
    this.doctorService.getDoctorByFirstNameAndLastName(splitter[0], splitter[1]).subscribe((doctor) => {
      this.doctor = doctor
    })
    this.appointmentService.getAllAppointmentsByDoctorName(splitter[0], splitter[1]).subscribe((appointments) => {
      this.appointmentsList = appointments
    })
  }

  selectedDate() {
    this.availableTime = ["08:00", "08:30", "09:00", "09:30", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
      "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
      "18:30", "19:00", "19:30"]
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
    let toRemove: string[] = []
    this.availableTime.forEach((time) => {
      if (this.doctor.startScheduleTime != undefined && this.doctor.endScheduleTime != undefined) {
        if (time < this.doctor.startScheduleTime || time >= this.doctor.endScheduleTime) {
          toRemove.push(time)
        }
      }
    })
    for (var i = 0; i < toRemove.length; i++) {
      this.availableTime.splice(this.availableTime.indexOf(toRemove[i]), 1)
    }
  }

  add() {
    console.log(this.facilities)
    this.animalService.getAllAnimalsByName(this.animalName).subscribe((animals) => {
      this.animal = animals[0]
      this.appointment.animal = this.animal
      this.appointment.doctor = this.doctor
      this.appointment.date = this.chosenDate + "T" + this.chosenTime + ":00"
      if (this.chosenFacility1 != null && this.chosenFacility1 != "") {
        this.facilities.forEach((facility) => {
          if (facility.name == this.chosenFacility1) {
            this.chosenFacilities.push(facility)
          }
        })
      }
      if (this.chosenFacility2 != null && this.chosenFacility2 != "" && this.chosenFacility2 != this.chosenFacility1) {
        this.facilities.forEach((facility) => {
          if (facility.name == this.chosenFacility2) {
            this.chosenFacilities.push(facility)
          }
        })
      }
      if (this.chosenFacility3 != null && this.chosenFacility3 != "" && this.chosenFacility3 != this.chosenFacility1 && this.chosenFacility3 != this.chosenFacility2) {
        this.facilities.forEach((facility) => {
          if (facility.name == this.chosenFacility3) {
            this.chosenFacilities.push(facility)
          }
        })
      }
      this.appointment.medicalFacilities = this.chosenFacilities
      console.log(this.appointment)
      this.appointmentService.addAppointment(this.appointment).subscribe((addedAppointment) => {
        this.router.navigate(['owner', 'appointmentsEdit']);
      }, error => {
        alert("Wrong appointment details")
      })
    })
  }
}
