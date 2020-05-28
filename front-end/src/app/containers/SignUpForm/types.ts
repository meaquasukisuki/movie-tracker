/* --- STATE --- */
export interface SignUpFormState {
  userData: {
    email: '';
    password: '';
  };
  loading: boolean;
  error: any;
  isSignIn: boolean;
}

export type ContainerState = SignUpFormState;
