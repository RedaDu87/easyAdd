package ch.easyad.easyback.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "vehicules")
public class Vehicule {
    @Id
    private String id;

    private String title;
    private Integer price;
    private Integer year;
    private String mileage;
    private String bodyType;
    private String drivetrain;
    private String engine;
    private String transmission;
    private String fuelType;
    private Integer cityMpg;
    private Integer highwayMpg;
    private String exteriorColor;
    private String interiorColor;
    private String vin;
    private String location;
    private List<String> images;
    private String videoUrl;
    private String condition;
    private Boolean certified;
    private Map<String, List<String>> features;
    private String description;

    private Seller seller;
    private String publishedDate;
    private String adNumber;
    private Integer views;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Seller {
        private String name;
        private String avatar;
        private Boolean isPrivate;
        private String phone;
        private Integer reviews;
    }
}
