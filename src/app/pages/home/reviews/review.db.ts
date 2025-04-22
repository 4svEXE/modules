export interface IReview {
  id: string,
  photo: string,
  name: string,
  text: string,
  rating?: 1 | 2 | 3 | 4 | 5
}

export const reviewsJSON: IReview[] = [
  {
    id: '1',
    photo: './assets/img/reviews/1.webp',
    name: 'REVIEWS.NAME_1',
    text: 'REVIEWS.TEXT_1',
    rating: 5
  },
  {
    id: '2',
    photo: './assets/img/reviews/2.webp',
    name: 'REVIEWS.NAME_2',
    text: 'REVIEWS.TEXT_2',
    rating: 5
  },
  {
    id: '3',
    photo: './assets/img/reviews/3.webp',
    name: 'REVIEWS.NAME_3',
    text: 'REVIEWS.TEXT_3',
    rating: 4
  },
  {
    id: '4',
    photo: './assets/img/reviews/4.webp',
    name: 'REVIEWS.NAME_4',
    text: 'REVIEWS.TEXT_4',
    rating: 5
  },
  {
    id: '5',
    photo: './assets/img/reviews/5.webp',
    name: 'REVIEWS.NAME_5',
    text: 'REVIEWS.TEXT_5',
    rating: 4
  },
  {
    id: '6',
    photo: './assets/img/reviews/6.webp',
    name: 'REVIEWS.NAME_6',
    text: 'REVIEWS.TEXT_6',
    rating: 5
  },
  {
    id: '7',
    photo: './assets/img/reviews/7.webp',
    name: 'REVIEWS.NAME_7',
    text: 'REVIEWS.TEXT_7',
    rating: 5
  },
  {
    id: '8',
    photo: './assets/img/reviews/8.webp',
    name: 'REVIEWS.NAME_8',
    text: 'REVIEWS.TEXT_8',
    rating: 4
  },
  {
    id: '9',
    photo: './assets/img/reviews/9.webp',
    name: 'REVIEWS.NAME_9',
    text: 'REVIEWS.TEXT_9',
    rating: 5
  },
  {
    id: '10',
    photo: './assets/img/reviews/10.webp',
    name: 'REVIEWS.NAME_10',
    text: 'REVIEWS.TEXT_10',
    rating: 5
  }
];

