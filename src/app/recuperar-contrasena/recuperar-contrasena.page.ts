import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  recuperarForm: FormGroup;
  mensaje: string = '';

  constructor() {
    this.recuperarForm = new FormGroup({
      usuario: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const usuario = this.recuperarForm.get('usuario')?.value;
    const contrasenaAlmacenada = localStorage.getItem('contrasena'); // Recupera la contraseña de Local Storage
    const usuarioAlmacenado = localStorage.getItem('usuario'); // Recupera el usuario almacenado

    if (usuario && usuario === usuarioAlmacenado && contrasenaAlmacenada) {
      this.mensaje = `La contraseña de ${usuario} es: ${contrasenaAlmacenada}`;
    } else {
      this.mensaje = 'Usuario no encontrado o no hay contraseña guardada.';
    }
  }
}
