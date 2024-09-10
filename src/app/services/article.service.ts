import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article, articles } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(articles)

  constructor() { }

  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable();
  }
}
