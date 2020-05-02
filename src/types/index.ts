export interface AuthState {
  loading: boolean;
  error: boolean;
  token: string;
  loggedOut: null | boolean;
  errorMessage: string;
}

export type Action = {
  type: string;
  payload: any;
};

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface AuthType {
  auth: AuthState;
  login: (
    credentials: LoginFormValues,
    navigateToDashboard: any,
  ) => Promise<void>;

  logOut: () => Promise<void>;
}
