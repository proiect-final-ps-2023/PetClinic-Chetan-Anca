package com.softwareProject.PetClinicProject.service.impl;

import com.softwareProject.PetClinicProject.exception.*;
import com.softwareProject.PetClinicProject.model.Appointment;
import com.softwareProject.PetClinicProject.service.OwnerService;
import com.softwareProject.PetClinicProject.service.UserService;
import com.softwareProject.PetClinicProject.model.Owner;
import com.softwareProject.PetClinicProject.model.User;
import com.softwareProject.PetClinicProject.model.UserType;
import com.softwareProject.PetClinicProject.repository.OwnerRepository;
import com.softwareProject.PetClinicProject.validator.OwnerDetailsValidator;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OwnerServiceImpl implements OwnerService {
    @Autowired
    private OwnerRepository ownerRepository;
    @Autowired
    private OwnerDetailsValidator ownerDetailsValidator;
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public OwnerServiceImpl(OwnerRepository ownerRepository, OwnerDetailsValidator ownerDetailsValidator, UserService userService) {
        this.ownerRepository = ownerRepository;
        this.ownerDetailsValidator = ownerDetailsValidator;
        this.userService = userService;
    }

    @Override
    public Owner getOwnerById(long id) throws OwnerNotFoundException {
        Optional<Owner> owner = ownerRepository.findById(id);
        if (!owner.isPresent()) {
            throw new OwnerNotFoundException("Owner with id " + id + " not found");
        }
        return owner.get();
    }

    @Override
    public Owner getOwnerByEmail(String email) throws OwnerNotFoundException {
        Optional<Owner> owner = ownerRepository.findByEmail(email);
        if (!owner.isPresent()) {
            throw new OwnerNotFoundException("Owner with email " + email + " not found");
        }
        return owner.get();
    }

    @Override
    public Owner getOwnerByFirstNameAndLastName(String firstName, String lastName) throws OwnerNotFoundException {
        Optional<Owner> owner = ownerRepository.findByFirstNameAndLastName(firstName, lastName);
        if (!owner.isPresent()) {
            throw new OwnerNotFoundException("Owner with first name " + lastName + " and last name " + lastName + " not found");
        }
        return owner.get();
    }

    @Override
    public List<Owner> getAllByFirstNameContaining(String firstName) {
        return ownerRepository.findAllByFirstNameContaining(firstName);
    }

    @Override
    public List<Owner> getAllByLastNameContaining(String lastName) {
        return ownerRepository.findAllByLastNameContaining(lastName);
    }


    @Override
    public Owner getOwnerByEmailAndPassword(String email, String password) throws OwnerNotFoundException {
        Optional<Owner> owner = ownerRepository.findByEmailAndPassword(email, password);
        if (!owner.isPresent()) {
            throw new OwnerNotFoundException("Owner with email " + email + " and password " + password + " not found");
        }
        return owner.get();
    }

    @Override
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    @Override
    public Owner addOwner(Owner owner) throws InvalidOwnerException {
        try {
            ownerDetailsValidator.validateOwnerDetails(owner);
            Optional<Owner> foundOwner = ownerRepository.findByEmail(owner.getEmail());
            if (!foundOwner.isPresent()) {
                User user = new User(owner.getOwnerId(), owner.getEmail(), owner.getPassword(), UserType.OWNER, false, null, null);
                userService.addUser(user);
                owner.setOwnerId(user.getId());
                ownerRepository.save(owner);
            } else {
                throw new InvalidOwnerException("Owner with this email already exists");
            }
        } catch (WrongDetailsException exp) {
            throw new InvalidOwnerException(exp.getMessage());
        }
        return owner;
    }

    @Override
    public Owner updateOwner(Owner owner) throws InvalidOwnerException, OwnerNotFoundException {
        Optional<Owner> ownerToUpdate = ownerRepository.findById(owner.getOwnerId());
        Owner finalOwner;
        if (ownerToUpdate.isPresent()) {
            User userToUpdate = userService.getUserById(ownerToUpdate.get().getOwnerId());
            User finalUser = createUser(owner, userToUpdate);
            finalOwner = createOwner(owner, ownerToUpdate.get());
            try {
                ownerDetailsValidator.validateOwnerDetails(finalOwner);
            } catch (WrongDetailsException exp) {
                throw new InvalidOwnerException(exp.getMessage());
            }
            ownerRepository.save(finalOwner);
            userService.updateUser(finalUser);
        } else {
            throw new OwnerNotFoundException("Owner to update not found");
        }
        return finalOwner;
    }

    @Override
    public Owner updatePassword(long id, String password) throws InvalidOwnerException, OwnerNotFoundException {
        Optional<Owner> ownerToUpdate = ownerRepository.findById(id);
        ownerToUpdate.get().setPassword(password);
        try {
            ownerDetailsValidator.validateOwnerDetails(ownerToUpdate.get());
        } catch (WrongDetailsException exp) {
            throw new InvalidOwnerException(exp.getMessage());
        }
        ownerToUpdate.get().setPassword(passwordEncoder.encode(password));
        User userToUpdate = userService.getUserById(id);
        User finalUser = createUser(ownerToUpdate.get(), userToUpdate);
        userService.updateUser(finalUser);
        return ownerRepository.save(ownerToUpdate.get());
    }

    @Override
    public void deleteOwnerById(long id) throws OwnerNotFoundException {
        Optional<Owner> ownerToDelete = ownerRepository.findById(id);
        if (ownerToDelete.isPresent()) {
            userService.deleteUserById(id);
            ownerRepository.deleteById(id);
        } else {
            throw new OwnerNotFoundException("Owner to delete not found");
        }
    }

    @Override
    public void saveOwnerToXml(long id) throws OwnerNotFoundException {
        Optional<Owner> owner = ownerRepository.findById(id);
        if (!owner.isPresent()) {
            throw new OwnerNotFoundException("Owner with id " + id + " not found");
        }
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(Appointment.class);
            Marshaller marshaller = jaxbContext.createMarshaller();
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

            marshaller.marshal(owner.get(), new File("Owner" + id + ".xml"));
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }

    private User createUser(Owner owner, User userToUpdate) {
        if (owner.getEmail() != null) {
            userToUpdate.setEmail(owner.getEmail());
        }
        if (owner.getPassword() != null) {
            userToUpdate.setPassword(owner.getPassword());
        }
        return userToUpdate;
    }

    private Owner createOwner(Owner owner, Owner ownerToUpdate) {
        if (owner.getFirstName() != null) {
            ownerToUpdate.setFirstName(owner.getFirstName());
        }
        if (owner.getLastName() != null) {
            ownerToUpdate.setLastName(owner.getLastName());
        }
        if (owner.getEmail() != null) {
            ownerToUpdate.setEmail(owner.getEmail());
        }
        if (owner.getPhoneNumber() != null) {
            ownerToUpdate.setPhoneNumber(owner.getPhoneNumber());
        }
        return ownerToUpdate;
    }
}
