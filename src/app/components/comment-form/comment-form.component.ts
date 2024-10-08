import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
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
import { UserDTO } from '../../models/user-dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent implements OnInit, OnDestroy {
  @Input() existingComment: Comment | null = null;
  @Input({ required: true }) articleId: string | undefined;
  @Output() commentSubmitted = new EventEmitter<Comment>();
  @Output() commentUpdated = new EventEmitter<Comment>();
  @Output() clickCancelEdit = new EventEmitter();
  @ViewChild('commentForm') commentForm!: NgForm;
  comment: Comment = { body: '' };
  exclamationIcon = faExclamationTriangle;
  showButtons = false;
  userSubscrition: Subscription | undefined;

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

  ngOnDestroy(): void {
    this.userSubscrition?.unsubscribe();
  }

  submit(): void {
    this.userSubscrition = this.authService.getCurrentUser().subscribe({
      next: (currentUser: UserDTO | null) => {
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
      },
      error: (error) => console.log(error)
    })
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
      next: (updatedComment) => {
        this.commentUpdated.emit(updatedComment);
        this.commentForm.reset();
      },
      error: (error) => console.log(error),
    });
  }
}
