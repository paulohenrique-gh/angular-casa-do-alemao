import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesBaseUrl = 'http://localhost:3000/articles';

  constructor(private httpClient: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.articlesBaseUrl);
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.httpClient.get<Article>(`${this.articlesBaseUrl}/${articleId}`);
  }

  saveArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.articlesBaseUrl, article)
  }

  updateArticle(article: Article): Observable<Article> {
    return this.httpClient.put<Article>(`${this.articlesBaseUrl}/${article.id}`, article);
  }

  deleteArticle(articleId: string): Observable<Article> {
    return this.httpClient.delete<Article>(`${this.articlesBaseUrl}/${articleId}`)
  }
}
