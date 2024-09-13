import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Comment } from '../../models/comment';
import { CommentComponent } from '../comment/comment.component';
import { CommentFormComponent } from "../comment-form/comment-form.component";

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [HeaderComponent, CommentComponent, CommentFormComponent],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
})
export class CommentSectionComponent {
  @Input({ required: true }) comments: Comment[] | null = [];
  @Input({required: true}) articleId: string | undefined = '';
}
