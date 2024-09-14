import { UserDTO } from './user-dto';

export interface Comment {
  id?: string;
  body: string;
  user?: UserDTO;
  commentDate?: Date;
  articleId?: string;
}
