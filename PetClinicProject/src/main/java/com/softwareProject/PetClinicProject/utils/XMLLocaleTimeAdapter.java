package com.softwareProject.PetClinicProject.utils;

import jakarta.xml.bind.annotation.adapters.XmlAdapter;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class XMLLocaleTimeAdapter extends XmlAdapter<String, LocalTime> {

    private static final DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_TIME;

    @Override
    public LocalTime unmarshal(String value) throws Exception {
        return LocalTime.parse(value, formatter);
    }

    @Override
    public String marshal(LocalTime value) throws Exception {
        return value.format(formatter);
    }
}
