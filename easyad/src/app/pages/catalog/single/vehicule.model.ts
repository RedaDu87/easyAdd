import { VehiculeFeatures } from "./vehiculeFatures.model";

export interface Vehicule {
    title: string;
    price: number;
    year: number;
    mileage: string;
    bodyType: string;
    drivetrain: string;
    engine: string;
    transmission: string;
    fuelType: string;
    cityMpg: number;
    highwayMpg: number;
    exteriorColor: string;
    interiorColor: string;
    vin: string;
    location: string;
    images: string[];
    videoUrl: string;
    condition: 'New' | 'Used';
    certified: boolean;
    features: VehiculeFeatures;
    description: string;
    seller: {
      name: string;
      avatar: string;
      isPrivate: boolean;
      phone: string;
      reviews: number;
    };
    publishedDate: string;
    adNumber: string;
    views: number;
  }
  