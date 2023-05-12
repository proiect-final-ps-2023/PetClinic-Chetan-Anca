package com.softwareProject.PetClinicProject.model;

import com.softwareProject.PetClinicProject.utils.XMLLocaleTimeAdapter;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlTransient;
import jakarta.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collection;
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
public class Doctor implements UserDetails, Serializable {
    @Id
    private long doctorId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;

    @XmlJavaTypeAdapter(XMLLocaleTimeAdapter.class)
    private LocalTime startScheduleTime;
    @XmlJavaTypeAdapter(XMLLocaleTimeAdapter.class)
    private LocalTime endScheduleTime;
    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER, mappedBy = "doctor")
    @XmlTransient
    private List<Appointment> appointments = new ArrayList<>();

    private int starsSum = 5;
    private int numberOfRatings = 1;
    private int rating = 5;

    @Override
    @Transactional
    public String toString() {
        return "Doctor{" +
                "doctorId=" + doctorId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", startScheduleTime=" + startScheduleTime +
                ", endScheduleTime=" + endScheduleTime +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(UserType.DOCTOR.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
