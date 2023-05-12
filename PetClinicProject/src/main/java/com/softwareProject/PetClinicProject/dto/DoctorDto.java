package com.softwareProject.PetClinicProject.dto;

import lombok.*;

import java.time.LocalTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDto {
    private long doctorId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private LocalTime startScheduleTime;
    private LocalTime endScheduleTime;
    private int numberOfRatings = 1;
    private int starsSum = 5;
    private int rating = 5;
}
