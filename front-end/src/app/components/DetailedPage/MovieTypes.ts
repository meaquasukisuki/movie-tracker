export default interface MovieTypes {
  genres: [string];
  cast: [string];
  languages: [string | undefined];
  countries: [string | undefined];
  directors: [string];
  _id: string;
  plot: string;
  runtime: number;
  num_mflix_comments?: number;
  poster?: string;
  title: string;
  fullplot: string;
  released: Date;
  writers: [string];
  awards?: {
    wins?: number;
    nominations?: number;
    text?: string;
  };
  lastupdated: Date;
  year: number;
  imdb?: {
    rating: number;
    votes: number;
    id: number;
  };
  type?: string;
  tomatoes?: {
    S;
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated?: Date;
  };
}
