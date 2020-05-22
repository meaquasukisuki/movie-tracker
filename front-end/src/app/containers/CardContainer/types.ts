/* --- STATE --- */
export interface CardContainerState {
  page: number;
  moviesData: Array<any>;
  limit: number;
  loading: boolean;
  error: any;
}

export type ContainerState = CardContainerState;
