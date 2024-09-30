import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
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
import { UserDTO } from '../../models/user-dto';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FaIconComponent],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent implements OnInit, OnDestroy {
  @Input() existingArticle: Article | null = null;
  @Output() modalClosed = new EventEmitter();
  @Output() newArticleSubmitted = new EventEmitter<Article>();
  @Output() articleUpdateSubmitted = new EventEmitter<Article>();
  @ViewChild('articleForm') articleForm!: NgForm;

  userSubscription: Subscription | null = null;

  article: Article = {
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
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.existingArticle) {
      this.article = { ...this.existingArticle };
    }
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  closeModal(): void {
    this.modalClosed.emit();
    this.articleForm.reset();
  }

  onSubmitArticle(): void {
    this.userSubscription = this.authService.getCurrentUser().subscribe({
      next: (currentUser: UserDTO | null) => {
        if (currentUser && currentUser.role === 'editor') {
          const articleToSave: Article = { ...this.article };

          if (this.existingArticle) {
            articleToSave.editDate = new Date();
            this.updateArticle(articleToSave);
          } else {
            articleToSave.user = currentUser;
            articleToSave.publicationDate = new Date();
            this.createArticle(articleToSave);
          }
        } else {
          this.router.navigate(['login']);
        }
      },
      error: (error) => console.log(error)
    });
  }

  createArticle(article: Article): void {
    this.articleService.saveArticle(article).subscribe({
      next: (newArticle: Article) => {
        this.newArticleSubmitted.emit(newArticle);
        this.articleForm.reset();
      },
      error: (error) => console.log(error),
    });
  }

  updateArticle(article: Article): void {
    this.articleService.updateArticle(article).subscribe({
      next: (updatedArticle: Article) => {
        this.articleUpdateSubmitted.emit(updatedArticle);
        this.articleForm.reset();
      },
      error: (error) => console.log(error),
    });
  }
}
