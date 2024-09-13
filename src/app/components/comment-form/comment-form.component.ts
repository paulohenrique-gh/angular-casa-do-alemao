import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../../models/comment';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent implements OnInit {
  @Input() existingComment: Comment | null = null;
  @Input({ required: true }) articleId: string | undefined;
  comment: Comment = { body: '' };
  exclamationIcon = faExclamationTriangle;

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.existingComment) {
      this.comment = { ...this.existingComment };
    }
  }

  submit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const commentToSave: Comment = {
        ...this.comment,
        commentDate: new Date(),
        user: this.authService.getCurrentUser(),
      };

      this.createComment(commentToSave);
    }
  }

  createComment(comment: Comment) {
    this.commentService.saveComment(comment).subscribe({
    });
  }
}
