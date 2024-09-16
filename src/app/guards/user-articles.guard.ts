import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserDTO } from '../models/user-dto';
import { AuthService } from '../services/auth.service';

import { map, tap } from 'rxjs/operators';

export const userArticlesGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getCurrentUser().pipe(
    map((user: UserDTO | null) => !!user && user.role === 'editor'),
    tap(isAuthorized => {
      if (!isAuthorized) {
        router.navigate(['']);
      }
    })
  );
};