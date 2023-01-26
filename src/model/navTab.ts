import { atom } from 'recoil';

export interface SelectedTab {
  tab: string;
}

export const selectTab = atom<SelectedTab>({
  key: 'selectTab',
  default: { tab: 'daily' },
});
