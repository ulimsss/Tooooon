import { atom } from 'recoil';

export interface PostType {
  id: string;
  text: string;
  title: string;
  createdAt: number;
  creatorId: string;
  userId: string;
}

export interface Editing {
  editing: boolean;
}

export const isEditing = atom<Editing>({
  key: 'isEditing',
  default: { editing: false },
});
