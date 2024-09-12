import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewArticleComponent } from '../../components/new-article/new-article.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    HeaderComponent,
    ArticleCardComponent,
    RouterModule,
    FontAwesomeModule,
    NewArticleComponent
],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  host: { class: 'w-full' },
})
export class ArticlesComponent implements OnInit {
  articles$!: Observable<Article[]>;
  faPlus = faPlus;
  isModalOpen = false;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

  openNewArticleModal() {
    this.isModalOpen = true;
  }

  closeNewArticleModal() {
    this.isModalOpen = false;
  }
}
