import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  registerForm: FormGroup;

  constructor(private navCtrl: NavController) {  // Agrega NavController al constructor
    this.registerForm = new FormGroup({
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
    if (this.registerForm.valid) {
      const usuario = this.registerForm.get('usuario')?.value;
      const contrasena = this.registerForm.get('contrasena')?.value;

      // Guardar usuario y contraseña en Local Storage
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('contrasena', contrasena);

      console.log('Usuario y contraseña guardados:', { usuario, contrasena });
      alert('Usuario y contraseña guardados correctamente.');
    } else {
      console.log('Formulario Inválido');
      alert('Formulario inválido. Por favor, revisa los campos.');
    }
  }

  goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }
}
