export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: 'editor' | 'user';
}
