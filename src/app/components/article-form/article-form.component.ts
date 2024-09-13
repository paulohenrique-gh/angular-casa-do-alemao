import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { AuthService } from '../../services/auth.service';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FaIconComponent],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent implements OnInit {
  @Input() existingArticle: Article | null = null;
  @Output() modalClosed = new EventEmitter();
  @Output() newArticleSubmitted = new EventEmitter();
  @Output() articleUpdateSubmitted = new EventEmitter();
  @ViewChild('articleForm') articleForm!: NgForm;

  article: Article = {
    title: '',
    imageUrl: '',
    previewText: '',
    content: '',
  };
  exclamationIcon = faExclamationTriangle;
  closeIcon = faCross;
  saveMode: 'create' | 'update' = 'create';

  constructor(
    private authService: AuthService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    if (this.existingArticle) {
      this.saveMode = 'update';
      this.article = { ...this.existingArticle };
    }
  }

  closeModal(): void {
    this.modalClosed.emit();
    this.articleForm.reset();
  }

  submit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.role === 'editor') {
      const articleToSend: Article = {
        ...this.article,
        publicationDate: new Date(),
        user: currentUser,
      };

      if (this.saveMode === 'create') {
        this.createArticle(articleToSend);
      } else {
        this.updateArticle(articleToSend);
      }
    }
  }

  createArticle(article: Article): void {
    this.articleService.saveArticle(article).subscribe({
      next: () => {
        this.newArticleSubmitted.emit();
        this.articleForm.reset();
      },
      error: (error) => console.log(error),
    });
  }

  updateArticle(article: Article): void {
    this.articleService.updateArticle(article).subscribe({
      next: () => {
        this.articleUpdateSubmitted.emit();
        this.articleForm.reset();
      },
      error: (error) => console.log(error),
    });
  }
}
