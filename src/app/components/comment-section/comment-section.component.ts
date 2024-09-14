import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentComponent } from '../comment/comment.component';
import { HeaderComponent } from '../header/header.component';
import { DialogComponent } from '../dialog/dialog.component';
import { SnackBarService } from '../../services/snack-bar.service';

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
  ],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
})
export class CommentSectionComponent implements OnInit {
  @Input({ required: true }) articleId: string | undefined = '';
  comments$!: Observable<Comment[]>;
  isDeleteModalOpen = false;
  selectedComment: Comment | null = null;

  constructor(private commentService: CommentService, private snackBarService: SnackBarService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    if (this.articleId) {
      this.comments$ = this.commentService.getComments(this.articleId);
    }
  }

  openDeleteConfirmModal(comment: Comment): void {
    this.selectedComment = comment;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  deleteComment(): void {
    if (this.selectedComment?.id) {
      this.commentService.deleteComment(this.selectedComment.id).subscribe({
        next: () => {
          this.isDeleteModalOpen = false;
          this.selectedComment = null;
          this.snackBarService.openSnackBar('Comentário excluído com sucesso');
          this.loadComments();
        }
      });
    }
  }

  onCommentUpdate(): void {
    this.snackBarService.openSnackBar('Comentário atualizado com sucesso');
  }
}
