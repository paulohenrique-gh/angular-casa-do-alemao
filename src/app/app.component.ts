import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { UserDTO } from './models/user-dto';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { class: 'flex flex-col min-h-screen' },
})
export class AppComponent implements OnInit {
  currentUser$!: Observable<UserDTO | null>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.authService.getCurrentUser();
  }

  handleLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
