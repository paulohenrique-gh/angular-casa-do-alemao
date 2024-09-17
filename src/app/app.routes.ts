import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { FullArticleComponent } from './pages/full-article/full-article.component';
import {SignupComponent} from "./pages/signup/signup.component";
import { LoginComponent } from './pages/login/login.component';
import { userArticlesGuard } from './guards/user-articles.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Início - Casa do Alemão'
  },
  {
    path: 'states',
    component: StatesComponent,
    title: 'Estados - Casa do Alemão'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Galeria - Casa do Alemão'
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    title: 'Artigos - Casa do Alemão'
  },
  {
    path: 'articles/:articleId',
    component: FullArticleComponent,
    title: 'Artigos - Casa do Alemão'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Cadastro - Casa do Alemão'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login - Casa do Alemão'
  },
  {
    path: 'my-articles',
    component: ArticlesComponent,
    canActivate: [userArticlesGuard],
    title: 'Meus Artigos - Casa do Alemão'
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Página não encontrada - Casa do Alemão'
  },
  {
    path: 'error',
    component: ErrorComponent,
    title: 'Erro - Casa do Alemão'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Página não encontrada - Casa do Alemão'
  },
];
