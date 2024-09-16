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
  },
  {
    path: 'states',
    component: StatesComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'articles/:articleId',
    component: FullArticleComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-articles',
    component: ArticlesComponent,
    canActivate: [userArticlesGuard]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
