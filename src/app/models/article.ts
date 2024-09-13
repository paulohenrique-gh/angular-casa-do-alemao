import { UserDTO } from './user-dto';

export interface Article {
  id?: string;
  imageUrl: string;
  title: string;
  previewText: string;
  content: string;
  publicationDate: Date;
  user: UserDTO;
}
