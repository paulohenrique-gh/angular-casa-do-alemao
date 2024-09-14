import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsBaseUrl = 'http://localhost:3000/comments';

  constructor(private httpClient: HttpClient) {}

  getComments(articleId: string): Observable<Comment[]> {
    return this.httpClient
      .get<Comment[]>(`${this.commentsBaseUrl}?articleId=${articleId}`)
      .pipe(
        tap((comments) =>
          comments.sort((a, b) => {
            if (a.commentDate && b.commentDate) {
              return new Date(b.commentDate).getTime() - new Date(a.commentDate).getTime();
            }
            return 0;
          })
        )
      );
  }

  saveComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.commentsBaseUrl, comment);
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(`${this.commentsBaseUrl}/${comment.id}`, comment);
  }

  deleteComment(commentId: string): Observable<Comment> {
    return this.httpClient.delete<Comment>(`${this.commentsBaseUrl}/${commentId}`);
  }
}
