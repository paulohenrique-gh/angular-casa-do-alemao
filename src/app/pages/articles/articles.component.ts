import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../../data';
import { ArticleService } from '../../services/article.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AsyncPipe, DatePipe, HeaderComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  articles$!: Observable<Article[]>

  constructor(private articleService: ArticleService) {}
  
  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

  loadDefaultImage(event: any): void {
    event.target.src = 'https://img.freepik.com/fotos-gratis/uma-pequena-bandeira-da-alemanha-na-cidade-borrada_485709-15.jpg'
  }
}
