export interface IBook {
  id: number;
  title: string;
  cover: string;
  content: string;
  genre: string;
  author: string;

  rating: number | null;
  reviewNumber: number | null;
}
