export type Action = {
  type: string;
  payload: any;
};

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface MarketForm {
  marketname: string;
  foodCategory: string;
  description: string;
  images: [];
  lat: string;
  lng: string;
}
