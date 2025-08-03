package ch.easyad.easyback.service;

import ch.easyad.easyback.model.Vehicule;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class VehiculeRepositoryImpl implements VehiculeRepositoryCustom {

    private final MongoTemplate mongoTemplate;

    public VehiculeRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Vehicule> search(String make, String model, String location, String fuelType,
                                 String transmission, String drivetrain,
                                 Integer minYear, Integer maxYear, Integer minPrice, Integer maxPrice) {

        List<Criteria> criteria = new ArrayList<>();

        if (make != null) criteria.add(Criteria.where("make").is(make));
        if (model != null) criteria.add(Criteria.where("model").is(model));
        if (location != null) criteria.add(Criteria.where("location").is(location));
        if (fuelType != null) criteria.add(Criteria.where("fuelType").is(fuelType));
        if (transmission != null) criteria.add(Criteria.where("transmission").is(transmission));
        if (drivetrain != null) criteria.add(Criteria.where("drivetrain").is(drivetrain));
        if (minYear != null) criteria.add(Criteria.where("year").gte(minYear));
        if (maxYear != null) criteria.add(Criteria.where("year").lte(maxYear));
        if (minPrice != null) criteria.add(Criteria.where("price").gte(minPrice));
        if (maxPrice != null) criteria.add(Criteria.where("price").lte(maxPrice));

        Query query = new Query();
        if (!criteria.isEmpty()) {
            query.addCriteria(new Criteria().andOperator(criteria.toArray(new Criteria[0])));
        }
        return mongoTemplate.find(query, Vehicule.class);
    }
}

