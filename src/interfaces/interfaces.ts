
export interface IMovie {
  original_title: string;
  poster_path: string;
  id: number | string;
  backdrop_path: string;
  budget: number;
  genres: { name: string, id:number }[];
  overview: string;
  release_date: string;
  tagline: string;
  vote_average: number;
  popularity:number
}

