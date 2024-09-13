import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
import { MatSnackBar } from '@angular/material/snack-bar';

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
export class ArticlesComponent implements OnInit {
  articles$!: Observable<Article[]>;
  faPlus = faPlus;
  isFormModalOpen = false;
  isDeleteModalOpen = false;
  selectedArticle: Article | null = null;

  constructor(
    private articleService: ArticleService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  private loadArticles(): void {
    this.articles$ = this.articleService.getArticles();
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-custom'],
      duration: 3000,
    });
  }

  openNewArticleFormModal(): void {
    this.isFormModalOpen = true;
  }

  openEditArticleFormModal(article: Article) {
    this.selectedArticle = article;
    this.isFormModalOpen = true;
  }

  confirmNewArticle(): void {
    this.openSnackBar('Artigo criado com sucesso');
    this.closeArticleFormModal();
    this.loadArticles();
  }

  confirmArticleUpdate(): void {
    this.openSnackBar('Artigo atualizado com sucesso');
    this.closeArticleFormModal();
    this.loadArticles();
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
      next: () => {
        this.isDeleteModalOpen = false;
        this.openSnackBar('Artigo excluído com sucesso');
        this.selectedArticle = null;
        this.loadArticles();
      },
    });
  }
}
