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

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    HeaderComponent,
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
  isModalOpen: boolean = false;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

  loadDefaultImage(event: any): void {
    event.target.src =
      'https://img.freepik.com/fotos-gratis/uma-pequena-bandeira-da-alemanha-na-cidade-borrada_485709-15.jpg';
  }

  openNewArticleModal() {
    this.isModalOpen = true;
  }
}
