export type AuthProps = {
  isLoggedIn: boolean;
  user?: UserInfo | null;
  token?: Token | null;
};
export type UserInfo = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  token: string;
  username: string;
  phoneNumber: string;
  notificationOption: string;
};
export type Token = {
  accessToken: string;
  expiresIn: number;
  expiresOn: number;
  tokenType?: string;
};
export type LoginData = {
  username: string;
  password: string;
};
export type AuthContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserInfo | null | undefined;
  login: (data: LoginData) => void;
  logout: () => void;
  register: () => void;
  resetPassword: (email: string) => Promise<void>;
  // updateProfile: VoidFunction
};
