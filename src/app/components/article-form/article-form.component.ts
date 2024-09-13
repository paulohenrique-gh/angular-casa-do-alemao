import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ArticleFormData } from '../../models/article-form-data';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { AuthService } from '../../services/auth.service';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FaIconComponent],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent {
  @Output() modalClosed = new EventEmitter();
  @ViewChild('articleForm') articleForm!: NgForm;

  article: ArticleFormData = {
    title: '',
    imageUrl: '',
    previewText: '',
    content: '',
  };
  exclamationIcon = faExclamationTriangle;
  closeIcon = faCross;

  constructor(
    private authService: AuthService,
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
  ) {}

  closeModal(): void {
    this.modalClosed.emit();
    this.articleForm.reset();
  }

  submit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const newArticle: Article = {
        ...this.article,
        publicationDate: new Date(),
        user: currentUser,
      };
      this.articleService.saveArticle(newArticle).subscribe({
        next: (data) => {
          console.log(data);
          this.modalClosed.emit();
          this.openSnackBar();
        },
        error: (error) => console.log(error)
      });
    }
  }

  openSnackBar(): void {
    this.snackBar.open('Artigo criado com sucesso', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [
        'snackbar-custom',
      ],
      duration: 3000
    });
  }
}
