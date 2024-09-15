import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidator } from '../../validators/confirm-password.validator';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { SnackBarService } from '../../services/snack-bar.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FaIconComponent, NgIf, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  nameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  confirmPasswordControl: FormControl;
  passwordGroup: FormGroup;

  signupForm: FormGroup;

  exclamationIcon = faExclamationTriangle;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {
    this.nameControl = this.formBuilder.control('', [Validators.required]);
    this.emailControl = this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordControl = this.formBuilder.control('', [Validators.required]);
    this.confirmPasswordControl = this.formBuilder.control('', [
      Validators.required,
    ]);
    this.passwordGroup = this.formBuilder.group(
      {
        password: this.passwordControl,
        confirmPassword: this.confirmPasswordControl,
      },
      { validators: confirmPasswordValidator }
    );

    this.signupForm = this.formBuilder.group(
      {
        name: this.nameControl,
        email: this.emailControl,
        passwordGroup: this.passwordGroup,
      },
      {
        updateOn: 'blur',
      }
    );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;
      const passwordValue = this.passwordGroup.value;
      const user: User = {
        name: formValue.name,
        email: formValue.email,
        password: passwordValue.password,
        role: 'user',
      };

      this.authService.saveUser(user).subscribe({
        next: () => { 
          this.snackBarService.openSnackBar('Cadastro realizado com sucesso');
          this.router.navigate(['login'])
        },
        error: (error) => console.log(error),
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
