/**
 * growing List
 */
 export interface growing {
  image: string;
  title?: string;
  content?: string;
}

/**
 * Story List
 */
 export interface story {
  id: string;
  year?: string;
  content?: string;
}

/**
 * Partners List
 */
 export interface partners {
  image?: string;
}

/**
 * News List
 */
 export interface news {
  btn?: string;
  btn_color?: string;
  image?: string;
  sub_title: string;
  title?: string;
  content?: string;
  profile?: string;
  name?: string;
  date?: string;
  comments?: string;
}
