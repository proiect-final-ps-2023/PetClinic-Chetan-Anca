import {Doctor} from "./Doctor";
import {Animal} from "./Animal";
import {MedicalFacility} from "./MedicalFacility";

export class Appointment {
  appointmentId: number | undefined;
  doctor: Doctor | undefined;
  animal: Animal | undefined;
  date: string | undefined;
  medicalFacilities: MedicalFacility[] | undefined
}
