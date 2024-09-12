import { Component, EventEmitter, Output } from '@angular/core';
import { ArticleFormData } from '../../models/article-form-data';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss'
})
export class NewArticleComponent {
  @Output() modalClosed = new EventEmitter();
  article: ArticleFormData = {
    title: '',
    imageUrl: '',
    previewText: '',
    content: ''
  }

  closeModal(): void {
    this.modalClosed.emit();
  }

  submit(): void {
    console.log(this.article)
  }
}
