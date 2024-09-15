import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }
  //
  console.log('password: ', password, 'confirmPassword: ', confirmPassword);
  console.log(password === confirmPassword);
  console.log(control)
  return password === confirmPassword ? null : { passwordMismatch: true }
}
