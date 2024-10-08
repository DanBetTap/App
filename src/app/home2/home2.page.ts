import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular'; // Importa NavController


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})

export class Home2Page {
  loginForm: FormGroup;
  mensaje: string | null = null;

  constructor(private navCtrl: NavController, private router: Router, private alertController: AlertController) {
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

  async onSubmit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value;
      const contrasena = this.loginForm.get('contrasena')?.value;

      const usuarioAlmacenado = localStorage.getItem('usuario');
      const contrasenaAlmacenada = localStorage.getItem('contrasena');

      if (usuario === usuarioAlmacenado) {
        if (contrasena === contrasenaAlmacenada) {
         
          this.router.navigate(['/principal'], { queryParams: { usuario } });
          this.mensaje = 'Inicio de sesión correcto';
        } else {
          this.mensaje = 'Contraseña incorrecta';
          await this.mostrarAlerta(this.mensaje);
        }
      } else {
        this.mensaje = 'Usuario no existente';
        await this.mostrarAlerta(this.mensaje);
      }
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
