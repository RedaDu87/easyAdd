package ch.easyad.easyback.service;

import ch.easyad.easyback.model.Vehicule;
import ch.easyad.easyback.repository.VehiculeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehiculeService {

    private final VehiculeRepository repository;

    public VehiculeService(VehiculeRepository repository) {
        this.repository = repository;
    }

    public List<Vehicule> getAll() {
        return repository.findAll();
    }

    public Optional<Vehicule> getById(String id) {
        return repository.findById(id);
    }

    public Vehicule create(Vehicule vehicule) {
        return repository.save(vehicule);
    }

    public Vehicule update(String id, Vehicule vehicule) {
        vehicule.setId(id);
        return repository.save(vehicule);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }


    public List<Vehicule> search(String make, String model, String location, String fuelType,
                                 String transmission, String drivetrain,
                                 Integer minYear, Integer maxYear, Integer minPrice, Integer maxPrice) {
        return repository.search(make, model, location, fuelType,
                transmission, drivetrain, minYear, maxYear, minPrice, maxPrice);
    }
}
