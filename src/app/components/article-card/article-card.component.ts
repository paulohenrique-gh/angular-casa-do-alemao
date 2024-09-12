import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input({required: true}) article!: Article;

  loadDefaultImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = 'https://img.freepik.com/fotos-gratis/uma-pequena-bandeira-da-alemanha-na-cidade-borrada_485709-15.jpg';
  }
}
