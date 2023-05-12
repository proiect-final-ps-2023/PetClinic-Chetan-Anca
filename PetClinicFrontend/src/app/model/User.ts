import {UserType} from "./UserType";

export class User {
  id: number | undefined;
  email: string | undefined;
  password: string | undefined;
  userType: UserType | undefined;
  logged: boolean | undefined;

  lastLoggedIn: string | undefined

  lastLoggedOut: string | undefined
}
