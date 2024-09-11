import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Comment } from '../../models/comment';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [HeaderComponent, CommentComponent],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
})
export class CommentSectionComponent {
  @Input({ required: true }) comments: Comment[] | null = [];
}
