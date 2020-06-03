/* --- STATE --- */
export interface FormState {
  userData: {
    user: any;
    token?: string;
  };
  userState: {
    email: string;
    password: string;
    name?: string;
  };
  error: Error | null;
  loading: boolean;
  isSignedIn: boolean;
}

export type ContainerState = FormState;
