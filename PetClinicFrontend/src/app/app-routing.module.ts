import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./component/login-page/login-page.component";
import {AdminFirstPageComponent} from "./component/admin/admin-first-page/admin-first-page.component";
import {DoctorFirstPageComponent} from "./component/doctor/doctor-first-page/doctor-first-page.component";
import {OwnerFirstPageComponent} from "./component/owner/owner-first-page/owner-first-page.component";
import {FirstPageComponent} from "./component/first-page/first-page.component";
import {DoctorsListPageComponent} from "./component/doctors-list-page/doctors-list-page.component";
import {
  MedicalFacilitiesListPageComponent
} from "./component/medical-facilities-list-page/medical-facilities-list-page.component";
import {RegistrationPageComponent} from "./component/registration-page/registration-page.component";
import {DoctorEditPageComponent} from "./component/admin/doctor-edit-page/doctor-edit-page.component";
import {OwnerEditPageComponent} from "./component/admin/owner-edit-page/owner-edit-page.component";
import {
  MedicalFacilityEditPageComponent
} from "./component/admin/medical-facility-edit-page/medical-facility-edit-page.component";
import {AddDoctorPageComponent} from "./component/admin/add-doctor-page/add-doctor-page.component";
import {UpdateDoctorPageComponent} from "./component/admin/update-doctor-page/update-doctor-page.component";
import {AddOwnerPageComponent} from "./component/admin/add-owner-page/add-owner-page.component";
import {UpdateOwnerPageComponent} from "./component/admin/update-owner-page/update-owner-page.component";
import {
  AddMedicalFacilityPageComponent
} from "./component/admin/add-medical-facility-page/add-medical-facility-page.component";
import {
  UpdateMedicalFacilityPageComponent
} from "./component/admin/update-medical-facility-page/update-medical-facility-page.component";
import {AnimalEditPageComponent} from "./component/owner/animal-edit-page/animal-edit-page.component";
import {AddAnimalPageComponent} from "./component/owner/add-animal-page/add-animal-page.component";
import {UpdateAnimalPageComponent} from "./component/owner/update-animal-page/update-animal-page.component";
import {
  AnimalEditDoctorPageComponent
} from "./component/doctor/animal-edit-doctor-page/animal-edit-doctor-page.component";
import {
  AnimalUpdateDoctorPageComponent
} from "./component/doctor/animal-update-doctor-page/animal-update-doctor-page.component";
import {AppointmentEditPageComponent} from "./component/owner/appointment-edit-page/appointment-edit-page.component";
import {AddAppointmentPageComponent} from "./component/owner/add-appointment-page/add-appointment-page.component";
import {
  UpdateAppointmentPageComponent
} from "./component/owner/update-appointment-page/update-appointment-page.component";
import {
  AppointmentEditDoctorPageComponent
} from "./component/doctor/appointment-edit-doctor-page/appointment-edit-doctor-page.component";
import {AnimalEditAdminPageComponent} from "./component/admin/animal-edit-admin-page/animal-edit-admin-page.component";
import {AddAnimalAdminPageComponent} from "./component/admin/add-animal-admin-page/add-animal-admin-page.component";
import {
  UpdateAnimalAdminPageComponent
} from "./component/admin/update-animal-admin-page/update-animal-admin-page.component";
import {
  UpdateAppointmentDoctorPageComponent
} from "./component/doctor/update-appointment-doctor-page/update-appointment-doctor-page.component";
import {ForgotPasswordPageComponent} from "./component/forgot-password-page/forgot-password-page.component";
import {ChangePasswordPageComponent} from "./component/change-password-page/change-password-page.component";
import {OwnerProfilePageComponent} from "./component/owner/owner-profile-page/owner-profile-page.component";
import {DoctorProfilePageComponent} from "./component/doctor/doctor-profile-page/doctor-profile-page.component";
import {UserActivityPageComponent} from "./component/admin/user-activity-page/user-activity-page.component";
import {ChatPageComponent} from "./component/chat-page/chat-page.component";
import {DoctorRatingPageComponent} from "./component/owner/doctor-rating-page/doctor-rating-page.component";

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'forgotPassword', component: ForgotPasswordPageComponent},
  {path: 'changePassword', component: ChangePasswordPageComponent},

  {path: 'admin', component: AdminFirstPageComponent},
  {path: 'doctor', component: DoctorFirstPageComponent},
  {path: 'owner', component: OwnerFirstPageComponent},

  {path: 'viewDoctors', component: DoctorsListPageComponent},
  {path: 'viewMedicalFacilities', component: MedicalFacilitiesListPageComponent},
  {path: 'doctorEdit', component: DoctorEditPageComponent},
  {path: 'ownerEdit', component: OwnerEditPageComponent},
  {path: 'facilityEdit', component: MedicalFacilityEditPageComponent},
  {path: 'animalEdit', component: AnimalEditAdminPageComponent},
  {path: 'add-doctors', component: AddDoctorPageComponent},
  {path: 'update-doctors/:id', component: UpdateDoctorPageComponent},
  {path: 'add-owners', component: AddOwnerPageComponent},
  {path: 'update-owners/:id', component: UpdateOwnerPageComponent},
  {path: 'add-animals', component: AddAnimalAdminPageComponent},
  {path: 'update-animals/:id', component: UpdateAnimalAdminPageComponent},
  {path: 'add-facilities', component: AddMedicalFacilityPageComponent},
  {path: 'update-facilities/:id', component: UpdateMedicalFacilityPageComponent},
  {path: 'userActivity', component: UserActivityPageComponent},

  {path: 'owner/animalsEdit', component: AnimalEditPageComponent},
  {path: 'owner/animalsEdit/add-animals', component: AddAnimalPageComponent},
  {path: 'owner/animalsEdit/update-animals/:animalId', component: UpdateAnimalPageComponent},
  {path: 'owner/appointmentsEdit', component: AppointmentEditPageComponent},
  {path: 'owner/appointmentsEdit/add-appointments', component: AddAppointmentPageComponent},
  {path: 'owner/appointmentsEdit/update-appointments/:appointmentId', component: UpdateAppointmentPageComponent},
  {path: 'owner/profile', component: OwnerProfilePageComponent},

  {path: 'doctor/animalsView', component: AnimalEditDoctorPageComponent},
  {path: 'doctor/animalsView/update-animals/:animalId', component: AnimalUpdateDoctorPageComponent},
  {path: 'doctor/appointmentsView', component: AppointmentEditDoctorPageComponent},
  {path: 'doctor/appointmentsView/update-appointments/:appointmentId', component: UpdateAppointmentDoctorPageComponent},
  {path: 'doctor/profile', component: DoctorProfilePageComponent},

  {path: 'announcements', component: ChatPageComponent},
  {path: 'rating', component: DoctorRatingPageComponent},

  {path: '**', component: FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
