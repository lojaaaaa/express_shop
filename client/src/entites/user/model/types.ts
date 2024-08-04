export interface LoginFormData {
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
}

export interface IUser {
  id: number;
  role: 'ADMIN' | 'USER',
  email: string
}