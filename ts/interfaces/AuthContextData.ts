export interface AuthContextData {
  signIn: (mail: string, password: string) => Promise<void | object>;
  signOut: () => Promise<void>;
  token: string;
  mail: string;
  loading: boolean;
  userCreate: (mail: string, password: string) => Promise<void | object>;
}
