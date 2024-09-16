import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserDTO } from '../../models/user-dto';
import { SnackBarService } from '../../services/snack-bar.service';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FaIconComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    LoadingComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  emailControl: FormControl;
  passwordControl: FormControl;

  loginForm: FormGroup;

  exclamationIcon = faExclamationTriangle;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.emailControl = this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordControl = this.formBuilder.control('', [Validators.required]);
    this.loginForm = this.formBuilder.group(
      {
        email: this.emailControl,
        password: this.passwordControl,
      },
      {
        updateOn: 'blur',
      }
    );
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;

      const login: Login = this.loginForm.value;
      this.authService.login(login).subscribe({
        next: (data: UserDTO | null) => {
          if (data) {
            this.isLoading = false;
            this.snackBarService.notifySuccess('Login efetuado com sucesso');
            const nextPage =
              this.activatedRoute.snapshot.queryParamMap.get('redirectTo') ||
              '';
            this.router.navigate([nextPage]);
          } else {
            this.isLoading = false;
            this.loginForm.setErrors({ wrongCredentials: true });
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Erro ao enviar requisição: ', error);
          this.router.navigate(['error']);
        },
      });
    }
  }
}
