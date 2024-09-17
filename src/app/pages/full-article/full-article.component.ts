import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SplitParagraphPipe } from '../../pipes/split-paragraph.pipe';
import { CommentSectionComponent } from '../../components/comment-section/comment-section.component';
import { Subscription } from 'rxjs';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
  selector: 'app-full-article',
  standalone: true,
  imports: [
    HeaderComponent,
    AsyncPipe,
    CommonModule,
    SplitParagraphPipe,
    CommentSectionComponent,
    LoadingComponent
],
  templateUrl: './full-article.component.html',
  styleUrl: './full-article.component.scss',
  host: { class: '' },
})
export class FullArticleComponent implements OnInit, OnDestroy {
  articleId!: string | undefined;
  article!: Article | null;
  articleSubscription!: Subscription;
  isLoading = true;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.articleId =
      this.activatedRoute.snapshot.paramMap.get('articleId') || '';
  }

  ngOnInit(): void {
    this.loadArticle();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  private loadArticle(): void {
    if (this.articleId) {
      this.articleSubscription = this.articleService.getArticleById(this.articleId).subscribe({
        next: (article: Article) => {
          this.isLoading = false;
          this.article = article;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Erro ao carregar artigo: ', error)
          if (error.status === 404) {
            this.router.navigate(['not-found']);
          } else {
            this.router.navigate(['error']);
          }
        },
      });
    }
  }
}
