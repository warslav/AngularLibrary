import { IBook } from '../models/Book';

export const Books: IBook[] = [];
for (var i = 1; i < 11; i++) {
  Books.push({
    id: i, title: 'Book' + i, cover: 'image' + i + '.png', author: 'Author' + i,
    content: 'Content book' + i + ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
    genre: 'Genre' + i, rating: i, reviewNumber: 10 + i
  });
}

