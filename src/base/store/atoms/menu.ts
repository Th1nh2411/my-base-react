import { atom } from 'recoil';

import { AuthProps } from '@base/types/auth';
import { sidebarDefaultData } from '@base/_mocks/menu';

export const sidebarAtom = atom<any>({
  key: 'sidebarAtom',
  default: sidebarDefaultData
});
