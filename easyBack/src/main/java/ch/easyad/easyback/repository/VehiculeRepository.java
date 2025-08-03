package ch.easyad.easyback.repository;


import ch.easyad.easyback.model.Vehicule;
import ch.easyad.easyback.service.VehiculeRepositoryCustom;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehiculeRepository extends MongoRepository<Vehicule, String>, VehiculeRepositoryCustom {
}

