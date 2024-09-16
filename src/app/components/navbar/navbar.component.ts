import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDTO } from '../../models/user-dto';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input({ required: true }) currentUser!: UserDTO | null;
  @Output() clickLogout = new EventEmitter();

  onLogout(): void {
    this.clickLogout.emit();
  }
}
