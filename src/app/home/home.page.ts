import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular'; // Importa NavController
import { PocketbaseService } from '../services/pocketbase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  registerForm: FormGroup;
  mensaje: string | null = null;
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  correo: string = '';
  tipo: string = ''; // Puede ser 'estudiante' o 'profesor'
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';

  constructor(private fb: FormBuilder, private navCtrl: NavController, private alertController: AlertController, private pocketbaseService: PocketbaseService) {  // Agrega NavController al constructor
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rut: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      tipo: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern(/^\d{1,5}$/)]], // solo números de hasta 5 caracteres
      passwordConfirm: ['', Validators.pattern(/^\d{1,5}$/)], // solo números de hasta 5 caracteres
    });
  }



  saveUser() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.pocketbaseService.createUser(userData).then((response) => {
        this.mensaje = 'username guardado con éxito';
        this.mostrarAlerta(this.mensaje);
        
      }).catch((error) => {
        this.mensaje = 'Error al guardar el username: ' , error;
        this.mostrarAlerta(this.mensaje);

      });
    } else {
      this.mensaje = 'El formulario es inválido';
      this.mostrarAlerta(this.mensaje);
      console.error('El formulario es inválido');
    }
    console.log(this.registerForm);
console.log('¿Formulario válido?:', this.registerForm.valid);
  }
  



  async mostrarAlerta(mensaje: string) { //quizas tire error porque esta el async, si es asi sacarlo
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
