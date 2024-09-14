import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../services/auth.service';
import { UserDTO } from '../../models/user-dto';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent implements OnInit {
  @Input({required: true}) article!: Article;
  @Output() clickDelete = new EventEmitter();
  @Output() clickEdit = new EventEmitter<string>();
  deleteIcon = faTrashAlt;
  editIcon = faEdit;
  currentUser: UserDTO | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  loadDefaultImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = 'https://img.freepik.com/fotos-gratis/uma-pequena-bandeira-da-alemanha-na-cidade-borrada_485709-15.jpg';
  }

  initDelete(): void {
    this.clickDelete.emit();
  }

  initEdit(): void {
    this.clickEdit.emit();
  }
}
