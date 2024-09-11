import { UserDTO } from './user-dto';

export interface Comment {
  id: number;
  body: string;
  user: UserDTO;
  commentDate: Date;
  articleId: number;
}
