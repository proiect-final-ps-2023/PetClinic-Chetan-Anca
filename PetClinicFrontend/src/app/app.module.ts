import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginPageComponent} from './component/login-page/login-page.component';
import {DoctorFirstPageComponent} from './component/doctor/doctor-first-page/doctor-first-page.component';
import {AdminFirstPageComponent} from './component/admin/admin-first-page/admin-first-page.component';
import {OwnerFirstPageComponent} from './component/owner/owner-first-page/owner-first-page.component';
import {FirstPageComponent} from './component/first-page/first-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { DoctorsListPageComponent } from './component/doctors-list-page/doctors-list-page.component';
import { MedicalFacilitiesListPageComponent } from './component/medical-facilities-list-page/medical-facilities-list-page.component';
import { DoctorEditPageComponent } from './component/admin/doctor-edit-page/doctor-edit-page.component';
import { OwnerEditPageComponent } from './component/admin/owner-edit-page/owner-edit-page.component';
import { MedicalFacilityEditPageComponent } from './component/admin/medical-facility-edit-page/medical-facility-edit-page.component';
import { DeleteDialogDoctorComponent } from './component/admin/delete-dialog-doctor/delete-dialog-doctor.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AddDoctorPageComponent } from './component/admin/add-doctor-page/add-doctor-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { UpdateDoctorPageComponent } from './component/admin/update-doctor-page/update-doctor-page.component';
import {MatIconModule} from "@angular/material/icon";
import { AddOwnerPageComponent } from './component/admin/add-owner-page/add-owner-page.component';
import { UpdateOwnerPageComponent } from './component/admin/update-owner-page/update-owner-page.component';
import { DeleteOwnerDialogComponent } from './component/admin/delete-owner-dialog/delete-owner-dialog.component';
import { AddMedicalFacilityPageComponent } from './component/admin/add-medical-facility-page/add-medical-facility-page.component';
import { UpdateMedicalFacilityPageComponent } from './component/admin/update-medical-facility-page/update-medical-facility-page.component';
import { DeleteMedicalFacilityDialogComponent } from './component/admin/delete-medical-facility-dialog/delete-medical-facility-dialog.component';
import { AnimalEditPageComponent } from './component/owner/animal-edit-page/animal-edit-page.component';
import { DeleteAnimalDialogComponent } from './component/owner/delete-animal-dialog/delete-animal-dialog.component';
import { AddAnimalPageComponent } from './component/owner/add-animal-page/add-animal-page.component';
import { UpdateAnimalPageComponent } from './component/owner/update-animal-page/update-animal-page.component';
import { AnimalEditDoctorPageComponent } from './component/doctor/animal-edit-doctor-page/animal-edit-doctor-page.component';
import { AnimalUpdateDoctorPageComponent } from './component/doctor/animal-update-doctor-page/animal-update-doctor-page.component';
import { AppointmentEditPageComponent } from './component/owner/appointment-edit-page/appointment-edit-page.component';
import { DeleteAppointmentDialogComponent } from './component/owner/delete-appointment-dialog/delete-appointment-dialog.component';
import { AddAppointmentPageComponent } from './component/owner/add-appointment-page/add-appointment-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { UpdateAppointmentPageComponent } from './component/owner/update-appointment-page/update-appointment-page.component';
import { AppointmentEditDoctorPageComponent } from './component/doctor/appointment-edit-doctor-page/appointment-edit-doctor-page.component';
import { AnimalEditAdminPageComponent } from './component/admin/animal-edit-admin-page/animal-edit-admin-page.component';
import { AddAnimalAdminPageComponent } from './component/admin/add-animal-admin-page/add-animal-admin-page.component';
import { UpdateAnimalAdminPageComponent } from './component/admin/update-animal-admin-page/update-animal-admin-page.component';
import { UpdateAppointmentDoctorPageComponent } from './component/doctor/update-appointment-doctor-page/update-appointment-doctor-page.component';
import { ForgotPasswordPageComponent } from './component/forgot-password-page/forgot-password-page.component';
import { ChangePasswordPageComponent } from './component/change-password-page/change-password-page.component';
import { OwnerProfilePageComponent } from './component/owner/owner-profile-page/owner-profile-page.component';
import { DoctorProfilePageComponent } from './component/doctor/doctor-profile-page/doctor-profile-page.component';
import { UserActivityPageComponent } from './component/admin/user-activity-page/user-activity-page.component';
import { ChatPageComponent } from './component/chat-page/chat-page.component';
import { DoctorRatingPageComponent } from './component/owner/doctor-rating-page/doctor-rating-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DoctorFirstPageComponent,
    AdminFirstPageComponent,
    OwnerFirstPageComponent,
    FirstPageComponent,
    RegistrationPageComponent,
    DoctorsListPageComponent,
    MedicalFacilitiesListPageComponent,
    DoctorEditPageComponent,
    OwnerEditPageComponent,
    MedicalFacilityEditPageComponent,
    DeleteDialogDoctorComponent,
    AddDoctorPageComponent,
    UpdateDoctorPageComponent,
    AddOwnerPageComponent,
    UpdateOwnerPageComponent,
    DeleteOwnerDialogComponent,
    AddMedicalFacilityPageComponent,
    UpdateMedicalFacilityPageComponent,
    DeleteMedicalFacilityDialogComponent,
    AnimalEditPageComponent,
    DeleteAnimalDialogComponent,
    AddAnimalPageComponent,
    UpdateAnimalPageComponent,
    AnimalEditDoctorPageComponent,
    AnimalUpdateDoctorPageComponent,
    AppointmentEditPageComponent,
    DeleteAppointmentDialogComponent,
    AddAppointmentPageComponent,
    UpdateAppointmentPageComponent,
    AppointmentEditDoctorPageComponent,
    AnimalEditAdminPageComponent,
    AddAnimalAdminPageComponent,
    UpdateAnimalAdminPageComponent,
    UpdateAppointmentDoctorPageComponent,
    ForgotPasswordPageComponent,
    ChangePasswordPageComponent,
    OwnerProfilePageComponent,
    DoctorProfilePageComponent,
    UserActivityPageComponent,
    ChatPageComponent,
    DoctorRatingPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatListModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
