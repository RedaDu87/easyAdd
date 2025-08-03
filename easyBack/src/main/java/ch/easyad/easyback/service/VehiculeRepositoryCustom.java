package ch.easyad.easyback.service;

import ch.easyad.easyback.model.Vehicule;

import java.util.List;

public interface VehiculeRepositoryCustom {
    List<Vehicule> search(String make, String model, String location, String fuelType,
                          String transmission, String drivetrain,
                          Integer minYear, Integer maxYear, Integer minPrice, Integer maxPrice);
}

