import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { FullArticleComponent } from './pages/full-article/full-article.component';
import {SignupComponent} from "./pages/signup/signup.component";

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
  }
];
