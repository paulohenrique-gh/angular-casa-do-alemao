import { UserDTO } from './user-dto';

export interface Article {
  id?: number;
  imageUrl: string;
  title: string;
  previewText: string;
  content: string;
  publicationDate: Date;
  user: UserDTO;
}
