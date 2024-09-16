import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../models/user-dto';
import { AuthService } from '../../../services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
  host: {class: 'flex flex-col items-center justify-center gap-4'}
})
export class EmptyStateComponent implements OnInit {
  @Output() clickCta = new EventEmitter();
  currentUser$!: Observable<UserDTO | null>;

  constructor(private authService: AuthService) {}

  onClick(): void {
    this.clickCta.emit();
  }

  ngOnInit(): void {
    this.currentUser$ = this.authService.getCurrentUser();
  }
}
