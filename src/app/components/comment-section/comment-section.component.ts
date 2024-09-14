import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentComponent } from '../comment/comment.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [
    HeaderComponent,
    CommentComponent,
    CommentFormComponent,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
})
export class CommentSectionComponent implements OnInit {
  @Input({ required: true }) articleId: string | undefined = '';
  comments$!: Observable<Comment[]>;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    if (this.articleId) {
      this.comments$ = this.commentService.getArticleComments(this.articleId);
    }
  }
}
