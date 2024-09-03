import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page {
  loginForm: FormGroup;
  mensaje: string = '';

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(8),
      ]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{1,4}$'),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value;
      const contrasena = this.loginForm.get('contrasena')?.value;

      const usuarioAlmacenado = localStorage.getItem('usuario');
      const contrasenaAlmacenada = localStorage.getItem('contrasena');

      if (usuario === usuarioAlmacenado) {
        if (contrasena === contrasenaAlmacenada) {
         
          this.router.navigate(['/principal'], { queryParams: { usuario } });
        } else {
          this.mensaje = 'Contraseña incorrecta';
        }
      } else {
        this.mensaje = 'Usuario no existente';
      }
    } else {
      this.mensaje = 'Formulario inválido. Por favor, revisa los campos.';
    }
  }
}
