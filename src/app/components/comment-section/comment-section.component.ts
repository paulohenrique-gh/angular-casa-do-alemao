import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentComponent } from '../comment/comment.component';
import { HeaderComponent } from '../header/header.component';
import { DialogComponent } from '../dialog/dialog.component';
import { SnackBarService } from '../../services/snack-bar.service';
import { UserDTO } from '../../models/user-dto';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [
    HeaderComponent,
    CommentComponent,
    CommentFormComponent,
    AsyncPipe,
    CommonModule,
    DialogComponent,
    RouterModule,
  ],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss'
})
export class CommentSectionComponent implements OnInit, OnDestroy {
  @Input({ required: true }) articleId: string | undefined = '';
  comments: Comment[] = [];
  commentSubscription!: Subscription;
  currentUser$!: Observable<UserDTO | null>;
  isDeleteModalOpen = false;
  selectedComment: Comment | null = null;

  constructor(
    private commentService: CommentService,
    private snackBarService: SnackBarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.authService.getCurrentUser();
    this.loadComments();
  }

  ngOnDestroy(): void {
    this.commentSubscription.unsubscribe();
  }

  loadComments(): void {
    if (this.articleId) {
      this.commentSubscription = this.commentService
        .getComments(this.articleId)
        .subscribe({
          next: (data: Comment[]) => (this.comments = data),
          error: (error) => console.log(error),
        });
    }
  }

  openDeleteConfirmModal(comment: Comment): void {
    this.selectedComment = comment;
    this.isDeleteModalOpen = true;
  }

  selectCommentToEdit(comment: Comment): void {
    this.selectedComment = comment;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  deleteComment(): void {
    if (this.selectedComment?.id) {
      this.commentService.deleteComment(this.selectedComment.id).subscribe({
        next: (deletedComment) => {
          this.isDeleteModalOpen = false;
          this.selectedComment = null;
          this.snackBarService.notifySuccess('Comentário excluído com sucesso');
          this.comments = this.comments.filter(
            (comment) => comment.id !== deletedComment.id
          );
        },
        error: (error) => console.log(error),
      });
    }
  }

  onCommentCreation(comment: Comment): void {
    this.comments = [comment, ...this.comments];
  }

  onCommentUpdate(updatedComment: Comment): void {
    this.comments.splice(
      this.comments.indexOf(this.selectedComment!),
      1,
      updatedComment
    );
    this.snackBarService.notifySuccess('Comentário atualizado com sucesso');
  }
}
