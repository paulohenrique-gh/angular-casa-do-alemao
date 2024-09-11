import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input({required: true}) comment!: Comment;
}
