import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleFormComponent } from '../../components/article-form/article-form.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { SnackBarService } from '../../services/snack-bar.service';

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
    ArticleFormComponent,
    DialogComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  host: { class: 'w-full' },
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  faPlus = faPlus;
  isFormModalOpen = false;
  isDeleteModalOpen = false;
  selectedArticle: Article | null = null;
  articlesSubscription!: Subscription;

  constructor(
    private articleService: ArticleService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  private loadArticles(): void {
    this.articlesSubscription = this.articleService.getArticles().subscribe({
      next: (data: Article[]) => this.articles = data,
      error: (error) => console.log(error)
    });
  }

  openNewArticleFormModal(): void {
    this.isFormModalOpen = true;
  }

  openEditArticleFormModal(article: Article) {
    this.selectedArticle = article;
    this.isFormModalOpen = true;
  }

  confirmNewArticle(article: Article): void {
    this.articles = [article, ...this.articles];
    this.snackBarService.notifySuccess('Artigo criado com sucesso');
    this.closeArticleFormModal();
  }

  confirmArticleUpdate(updatedArticle: Article): void {
    this.articles.splice(this.articles.indexOf(this.selectedArticle!), 1, updatedArticle);
    this.snackBarService.notifySuccess('Artigo atualizado com sucesso');
    this.closeArticleFormModal();
  }

  closeArticleFormModal() {
    this.isFormModalOpen = false;
    this.selectedArticle = null;
  }

  openDeleteConfirmModal(article: Article): void {
    this.selectedArticle = article;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.selectedArticle = null;
    this.isDeleteModalOpen = false;
  }

  deleteArticle(): void {
    if (this.selectedArticle?.id)
    this.articleService.deleteArticle(this.selectedArticle.id).subscribe({
      next: (deletedArticle) => {
        this.articles = this.articles.filter(article => article.id !== deletedArticle.id);
        this.isDeleteModalOpen = false;
        this.selectedArticle = null;
        this.snackBarService.notifySuccess('Artigo excluído com sucesso');
      },
    });
  }
}
