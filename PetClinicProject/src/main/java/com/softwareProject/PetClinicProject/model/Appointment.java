package com.softwareProject.PetClinicProject.model;

import com.softwareProject.PetClinicProject.utils.XMLLocaleDateTimeAdapter;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Appointment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long appointmentId;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private Doctor doctor;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private Animal animal;

    @XmlJavaTypeAdapter(XMLLocaleDateTimeAdapter.class)
    private LocalDateTime date;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<MedicalFacility> medicalFacilities = new ArrayList<>();

    @Override
    @Transactional
    public String toString() {
        return "Appointment{" +
                "appointmentId=" + appointmentId +
                ", doctor=" + doctor.toString() +
                ", animal=" + animal.toString() +
                '}';
    }

    public int computePrice() {
        int price = 0;
        for (MedicalFacility medicalFacility : medicalFacilities) {
            price += medicalFacility.getPrice();
        }
        return price;
    }
}
