/* --- STATE --- */
export interface FormState {
  userData: {
    email: string;
    password: string;
    name?: string;
  };
  error: Error | null;
  loading: boolean;
  isSignedIn: boolean;
}

export type ContainerState = FormState;
