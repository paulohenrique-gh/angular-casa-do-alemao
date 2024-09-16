import { Injectable } from '@angular/core';
import { UserDTO } from '../models/user-dto';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserDTO | null> = new BehaviorSubject<UserDTO | null>(null);
  private usersBaseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('loggedInUser')) {
      const storedUser = localStorage.getItem('loggedInUser');
      const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
      this.currentUserSubject.next(loggedInUser);
    }
  }

  getCurrentUser(): Observable<UserDTO | null> {
    return this.currentUserSubject.asObservable();
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
        this.currentUserSubject.next(userDTO);
        localStorage.setItem('loggedInUser', JSON.stringify(userDTO));

        return userDTO;
      })
    );
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.currentUserSubject.next(null);
  }
}
