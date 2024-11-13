import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular'; // Importa NavController
import { PocketbaseService } from '../services/pocketbase.service';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})

export class Home2Page {
  loginForm: FormGroup;
  mensaje: string | null = null;

  constructor(private navCtrl: NavController, private router: Router, private alertController: AlertController, private pocketbaseService: PocketbaseService) {  
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(8),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{1,5}$'),
      ]),
    });
  }



  async onLogin() {
    const { username, password } = this.loginForm.value;
    this.pocketbaseService.login(username, password).subscribe(
      (res) => {
        this.router.navigate(['/principal'], { queryParams: { username } });
        this.mensaje = 'Inicio de sesión correcto';
      },
      (error) => {
        this.mensaje = 'Error al iniciar sesión. Por favor, revisa los campos.';
        this.mostrarAlerta(this.mensaje);
      }
    );
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
