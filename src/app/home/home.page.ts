import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  registerForm: FormGroup;
  mensaje: string | null = null;
  constructor(private navCtrl: NavController, private alertController: AlertController) {  // Agrega NavController al constructor
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

  async onSubmit() {
    if (this.registerForm.valid) {
      const usuario = this.registerForm.get('usuario')?.value;
      const contrasena = this.registerForm.get('contrasena')?.value;

      // Guardar usuario y contraseña en Local Storage
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('contrasena', contrasena);

      this.mensaje = 'Registro correcto';
      await this.mostrarAlerta(this.mensaje);
    } else {
      this.mensaje = 'Formulario inválido. Por favor, revisa los campos.';
      await this.mostrarAlerta(this.mensaje);
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: ['Entendido']
    });
    await alert.present();
  }
  
  goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }
}
