import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Appointment} from "../model/Appointment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseURL: string = "http://localhost:8080/appointment";

  constructor(private httpClient: HttpClient) {
  }

  getAppointmentById(id: number): Observable<Appointment> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment>(this.baseURL + "/findById?id=" + id, {headers: header})
  }

  getAppointmentByDoctorAndTime(firstName: string, lastName: string, date: string): Observable<Appointment> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment>(this.baseURL + "/findByDoctorAndDate?firstName=" + firstName + "&lastName=" + lastName + "&date=" + date, {headers: header})
  }

  getAllAppointmentsByDoctorId(id: number): Observable<Appointment[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByDoctorId?id=" + id, {headers: header});
  }

  getAllAppointmentsByDoctorName(firstName: string, lastName: string): Observable<Appointment[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByDoctorName?firstName=" + firstName + "&lastName=" + lastName, {headers: header});
  }

  getAllAppointmentsByAnimal(name: string): Observable<Appointment[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByAnimal?name=" + name, {headers: header})
  }

  getAllByAnimalOwnerId(id: number | undefined): Observable<Appointment[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByOwner?id=" + id, {headers: header})
  }

  getAllAppointmentsByTime(date: string): Observable<Appointment[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByDate?date=" + date, {headers: header})
  }

  getAllAppointments(): Observable<Appointment[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Appointment[]>(this.baseURL, {headers: header})
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.post<Appointment>(this.baseURL + "/add", appointment, {headers: header})
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Appointment>(this.baseURL + "/update", appointment, {headers: header})
  }

  deleteAppointment(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id, {headers: header})
  }

  saveAppointmentToXML(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get(this.baseURL + "/xml?id=" + id, {headers: header})
  }
}
