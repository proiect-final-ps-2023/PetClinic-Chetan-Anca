import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";

@Component({
  selector: 'app-doctor-rating-page',
  templateUrl: './doctor-rating-page.component.html',
  styleUrls: ['./doctor-rating-page.component.css']
})
export class DoctorRatingPageComponent implements OnInit {
  maxRating: number = 5;
  selectedStar: number = 0
  maxRatingArr: any = []
  previousSelection = 0
  name: string = ""
  doctorsList: Doctor[] = [];
  hoveredRowId: number | null = null;
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Phone Number', 'Start Schedule Time', 'End Schedule Time', 'Rating']

  constructor(private doctorService: DoctorService) {
  }

  HandleMouseEnter(index: number, id: number) {
    if (this.hoveredRowId === id) {
      this.selectedStar = index + 1;
    }
  }

  HandleMouseLeave() {
    if (this.previousSelection !== 0) {
      this.selectedStar = this.previousSelection
    } else {
      this.selectedStar = 0
    }
  }

  Rating(index: number, id: number) {
    this.selectedStar = index + 1;
    this.previousSelection = this.selectedStar
    this.doctorService.updateRating(id, this.selectedStar).subscribe((doctorReturned) => {
      alert("You have rated doctor " + doctorReturned.lastName + " with " + this.selectedStar + " stars!")
    })
  }

  ngOnInit() {
    this.maxRatingArr = Array(this.maxRating).fill(0);
    this.doctorService.getAllDoctors().subscribe((data) => {
      console.log(data)
      this.doctorsList = data
    }, (_error) => {
      alert("No doctors available now")
    });
  }

  HandleRowEnter(rowId: number) {
    this.hoveredRowId = rowId;
  }

  HandleRowLeave() {
    this.hoveredRowId = null;
  }
}
