import { atom } from 'recoil';

export interface GenreTabType {
  genre: string;
}

export const genreTab = atom<GenreTabType>({
  key: 'genreTab',
  default: {
    genre: '일상',
  },
});
