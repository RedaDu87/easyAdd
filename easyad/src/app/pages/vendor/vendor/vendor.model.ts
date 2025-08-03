/**
 * List
 */
 export interface List {
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: Array<{
    img?: string;
  }>;
  year?: string;
  title?: string;
  price?: string;
  country?: string;
  avg?: string;
  eng?: string;
  fuel?: string;
}

/**
 * About Reviews List
 */
 export interface reviews {
  image?: string;
  title?: string;
  date?: string;
  rating?: any;
  content?: string;
  like?: string;
  unlike?: string;
}

/**
 * latest Car List
 */
 export interface latestCar {
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: string;
  year?: string;
  title?: string;
  price?: string;
  country?: string;
  avg?: string;
  eng?: string;
  fuel?: string;
}

