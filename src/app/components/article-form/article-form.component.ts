import { Component, EventEmitter, Output } from '@angular/core';
import { ArticleFormData } from '../../models/article-form-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent {
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
