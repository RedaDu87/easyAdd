package ch.easyad.easyback.controller;

import ch.easyad.easyback.model.Vehicule;
import ch.easyad.easyback.service.VehiculeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicules")
@Tag(name = "Vehicule API", description = "CRUD API for managing vehicules")
public class VehiculeController {

    private final VehiculeService service;

    public VehiculeController(VehiculeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Vehicule> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Vehicule getById(@PathVariable String id) {
        return service.getById(id).orElseThrow();
    }

    @PostMapping
    public Vehicule create(@RequestBody Vehicule vehicule) {
        return service.create(vehicule);
    }

    @PutMapping("/{id}")
    public Vehicule update(@PathVariable String id, @RequestBody Vehicule vehicule) {
        return service.update(id, vehicule);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }

    @GetMapping("/search")
    public List<Vehicule> search(
            @RequestParam(required = false) String make,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) String transmission,
            @RequestParam(required = false) String drivetrain,
            @RequestParam(required = false) Integer minYear,
            @RequestParam(required = false) Integer maxYear,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice
    ) {
        return service.search(make, model, location, fuelType, transmission, drivetrain, minYear, maxYear, minPrice, maxPrice);
    }
}
