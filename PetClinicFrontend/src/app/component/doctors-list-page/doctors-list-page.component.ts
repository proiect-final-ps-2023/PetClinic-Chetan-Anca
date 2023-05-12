import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../model/Doctor";
import {DoctorService} from "../../service/DoctorService";

@Component({
  selector: 'app-doctors-list-page',
  templateUrl: './doctors-list-page.component.html',
  styleUrls: ['./doctors-list-page.component.css']
})
export class DoctorsListPageComponent implements OnInit {
  name: string = ""
  isCheckedFirstName: boolean = false;
  isCheckedLastName: boolean = false;
  doctorsList: Doctor[] = [];
  displayedColumns: string[] = ['First Name', 'Last Name', 'Phone Number', 'Start Schedule Time', 'End Schedule Time', 'Rating', 'Show rating']

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe((data) => {
        console.log(data)
        this.doctorsList = data
      },
      (_error) => {
        alert("No doctors available now")
      });
  }

  onSearch() {
    if (this.isCheckedFirstName && this.isCheckedLastName) {
      let splitter = this.name.trim().split(" ", 2)
      this.doctorService.getDoctorByFirstNameAndLastName(splitter[0], splitter[1]).subscribe((data) => {
        console.log(data)
        this.doctorsList = []
        this.doctorsList.push(data)
      })

      this.doctorService.getDoctorByFirstNameAndLastName(splitter[1], splitter[0]).subscribe((data) => {
          console.log(data)
          this.doctorsList = []
          this.doctorsList.push(data)
        },
        (_error) => {
          alert("No doctor with this name at our clinic")
        });
    } else if (this.isCheckedLastName) {
      this.doctorService.getDoctorsByLastName(this.name.trim()).subscribe((data) => {
          console.log(data)
          this.doctorsList = data
        },
        (_error) => {
          alert("No doctors available")
        });
    } else if (this.isCheckedFirstName) {
      this.doctorService.getDoctorsByFirstName(this.name.trim()).subscribe((data) => {
          console.log(data)
          this.doctorsList = data
        },
        (_error) => {
          alert("No doctors available")
        });
    } else {
      this.doctorService.getAllDoctors().subscribe((data) => {
          console.log(data)
          this.doctorsList = data
        },
        (_error) => {
          alert("No doctors available")
        });
    }
  }

}
