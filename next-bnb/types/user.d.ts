export interface UserType {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
  profileImage: string;
}

export interface StoredUserType extends UserType {
  password: string;
}
