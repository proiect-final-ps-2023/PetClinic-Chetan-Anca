package com.softwareProject.PetClinicProject.model;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlTransient;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Builder
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Animal implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long animalId;
    private String name;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private Owner owner;
    @Enumerated(EnumType.STRING)
    private AnimalType type;
    private String breed;
    private int age;
    private float weight;
    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER, mappedBy = "animal")
    @XmlTransient
    private List<Appointment> appointments = new ArrayList<>();

    @Override
    @Transactional
    public String toString() {
        return "Animal{" +
                "animalId=" + animalId +
                ", name='" + name + '\'' +
                ", owner=" + owner.toString() +
                ", type=" + type +
                ", breed='" + breed + '\'' +
                ", age=" + age +
                '}';
    }
}
