import { atom } from 'recoil';

import { AuthProps } from '@base/types/auth';

export const authAtom = atom<AuthProps>({
  key: 'authAtom',
  default: {
    isLoggedIn: true,
    user: null,
    token: null
  }
});
