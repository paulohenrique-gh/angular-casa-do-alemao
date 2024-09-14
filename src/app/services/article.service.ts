import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { CommentService } from './comment.service';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesBaseUrl = 'http://localhost:3000/articles';

  constructor(
    private httpClient: HttpClient,
    private commentService: CommentService
  ) {}

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.articlesBaseUrl);
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.httpClient.get<Article>(`${this.articlesBaseUrl}/${articleId}`);
  }

  saveArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.articlesBaseUrl, article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.httpClient.put<Article>(
      `${this.articlesBaseUrl}/${article.id}`,
      article
    );
  }

  deleteArticle(articleId: string): Observable<Article> {
    return this.httpClient.delete<Article>(`${this.articlesBaseUrl}/${articleId}`).pipe(
      tap(article => {
        this.commentService.getComments(article.id!).subscribe({
          next: (commentsToDelete) => {
            commentsToDelete.forEach(comment => {
              this.commentService.deleteComment(comment.id!).subscribe()
            })
          }
        })
      })
    );
  }
}
