import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommonModule } from '@angular/common';
import { UserDTO } from '../../models/user-dto';
import { AuthService } from '../../services/auth.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {
  @Input({required: true}) comment!: Comment;
  @Output() clickDelete = new EventEmitter<Comment>();
  @Output() commentUpdated = new EventEmitter();
  currentUser: UserDTO | undefined = undefined;
  deleteIcon = faTrashAlt;
  editIcon = faEdit;
  isEditEnabled = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  initEdit(): void {
    this.isEditEnabled = true;
  }

  notifyUpdate(comment: Comment): void {
    this.comment = comment;
    this.isEditEnabled = false;
    this.commentUpdated.emit();
  }

  cancelEdit(): void {
    this.isEditEnabled = false;
  }

  initDelete(): void {
    this.clickDelete.emit(this.comment);
  }
}
