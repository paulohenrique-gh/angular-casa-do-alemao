import { Injectable } from '@angular/core';
import { UserDTO } from '../models/user-dto';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: UserDTO | null = null;
  private usersBaseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('loggedInUser')) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      this.currentUser = loggedInUser ? JSON.parse(loggedInUser) : null;
    }
  }

  getCurrentUser(): UserDTO | null {
    return this.currentUser;
  }

  saveUser(user: User): Observable<UserDTO> {
    return this.httpClient.post<User>(this.usersBaseUrl, user).pipe(
      map((user: User) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        } as UserDTO;
      })
    );
  }

  login(login: Login): Observable<UserDTO | null> {
    const loginParams = {
      params: { email: login.email, password: login.password },
    };
    return this.httpClient.get<User[]>(this.usersBaseUrl, loginParams).pipe(
      map((res) => {
        if (res.length === 0) {
          return null;
        }

        const user = res[0];
        const userDTO = {
          id: user.id!,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        this.currentUser = userDTO;
        localStorage.setItem('loggedInUser', JSON.stringify(userDTO));

        return userDTO;
      })
    );
  }
}
