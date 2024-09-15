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
    return this.httpClient.get<Article[]>(this.articlesBaseUrl)
    .pipe(
      tap((articles) => {
        articles.sort((a, b) => {
          return new Date(b.publicationDate!).getTime() - new Date(a.publicationDate!).getTime();
        })
      })
    );
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
    // https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
    // https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin
    // https://www.youtube.com/watch?v=RUX7Ghb0GRU

    return this.commentService.getComments(articleId).pipe(
      switchMap((comments: Comment[]) => {
        if (!comments.length) {
          return this.httpClient.delete<Article>(`${this.articlesBaseUrl}/${articleId}`);
        }

        const deleteObservables: Observable<Comment>[] = comments.map(
          (comment: Comment) => {
            return this.commentService.deleteComment(comment.id!);
          }
        );

        return forkJoin<Comment[]>(deleteObservables).pipe(
          switchMap(() => {
            return this.httpClient.delete<Article>(
              `${this.articlesBaseUrl}/${articleId}`
            );
          })
        );
      })
    );
  }
}
