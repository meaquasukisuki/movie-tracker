/* --- STATE --- */
export interface FormState {
  email: string;
  password: string;
  name?: string;
  error: Error | null;
  loading: boolean;
  formType: string;
}

export type ContainerState = FormState;
