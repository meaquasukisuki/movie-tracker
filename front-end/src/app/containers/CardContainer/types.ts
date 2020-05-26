/* --- STATE --- */
export interface CardContainerState {
  page: number;
  moviesData: Array<any>;
  limit: number;
  loading: boolean;
  error: any;
  sortMethod: undefined | string;
}

export type ContainerState = CardContainerState;
