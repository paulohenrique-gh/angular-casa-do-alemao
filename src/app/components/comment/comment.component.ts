import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommonModule } from '@angular/common';
import { UserDTO } from '../../models/user-dto';
import { AuthService } from '../../services/auth.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {
  @Input({required: true}) comment!: Comment;
  @Output() clickDelete = new EventEmitter<Comment>();
  currentUser: UserDTO | undefined = undefined;
  deleteIcon = faTrashAlt;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  initDelete(): void {
    this.clickDelete.emit(this.comment);
  }
}
