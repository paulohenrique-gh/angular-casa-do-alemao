import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesBaseUrl: string = 'http://localhost:3000/articles';
  private commentsBaseUrl: string = 'http://localhost:3000/comments'

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.articlesBaseUrl);
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.httpClient.get<Article>(`${this.articlesBaseUrl}/${articleId}`);
  }

  getArticleComments(articleId: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.commentsBaseUrl}?articleId=${articleId}`);
  }
}
