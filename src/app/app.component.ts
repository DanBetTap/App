import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(8),
      ]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{1,4}$'), // Solo números, máximo 4 caracteres
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario Válido:', this.loginForm.value);
    } else {
      console.log('Formulario Inválido');
    }
  }
}

