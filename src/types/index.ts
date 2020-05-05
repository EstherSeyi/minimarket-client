export type Action = {
  type: string;
  payload: any;
};

export interface LoginFormValues {
  email: string;
  password: string;
}
