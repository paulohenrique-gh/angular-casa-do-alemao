import { Injectable } from '@angular/core';
import { UserDTO } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: UserDTO | undefined = {
    id: "sdij9I",
    name: "Testador da Silva",
    role: 'editor'
  };

  getCurrentUser(): UserDTO | undefined {
    return this.currentUser;
  }

}
