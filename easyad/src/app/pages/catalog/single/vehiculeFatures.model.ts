export interface VehiculeFeatures {
    [key: string]: string[]; // <-- clé dynamique
    exterior: string[];
    interior: string[];
    safety: string[];
    technology: string[];
  }
  