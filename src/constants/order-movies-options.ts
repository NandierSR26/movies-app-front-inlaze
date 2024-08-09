export interface IOrderMoviesOptions {
  value: string;
  text: string;
}

export const orderMoviesOptions = [
  { value: 'title.asc', text: 'Title A-Z' },
  { value: 'popularity.asc', text: 'Popularity Ascending' },
  { value: 'popularity.desc', text: 'Popularity Descending' },
  { value: 'vote_average.asc', text: 'Rating Ascending' },
  { value: 'vote_average.desc', text: 'Rating Descending' },
  { value: 'primary_release_date.asc', text: 'Release Date Ascending' },
  { value: 'primary_release_date.desc', text: 'Release Date Descending' },
]