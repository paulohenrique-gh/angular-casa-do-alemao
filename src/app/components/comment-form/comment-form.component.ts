import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  @Output() commentSubmitted = new EventEmitter<Comment>();
  @Output() commentUpdated = new EventEmitter<Comment>();
  @Output() clickCancelEdit = new EventEmitter();
  @ViewChild('commentForm') commentForm!: NgForm;
  comment: Comment = { body: '' };
  exclamationIcon = faExclamationTriangle;
  showButtons = false;

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.existingComment) {
      this.comment = { ...this.existingComment };
      this.showButtons = true;
    }
  }

  submit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const commentToSave: Comment = { ...this.comment };

      if (this.existingComment) {
        commentToSave.editDate = new Date();
        this.updateComment(commentToSave);
      } else {
        commentToSave.articleId = this.articleId;
        commentToSave.commentDate = new Date();
        commentToSave.user = currentUser;
        this.createComment(commentToSave);
      }
    }
  }

  cancel(): void {
    if (!this.existingComment) {
      this.commentForm.reset();
    }

    this.clickCancelEdit.emit();
  }

  createComment(comment: Comment) {
    this.commentService.saveComment(comment).subscribe({
      next: (newComment: Comment) => {
        this.commentSubmitted.emit(newComment);
        this.commentForm.reset();
      },
      error: (error) => console.log(error),
    });
  }

  updateComment(comment: Comment) {
    this.commentService.updateComment(comment).subscribe({
      next: (comment) => {
        this.comment = comment;
        this.commentUpdated.emit(comment);
      },
      error: (error) => console.log(error),
    });
  }
}
