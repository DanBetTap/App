import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PocketbaseService } from '../services/pocketbase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent  implements OnInit {
  registerForm: FormGroup;
  usuario: String = '';
  contraseña: String = ''; 

  //usando el constructor para dejar las validaciones de registro de usuario
  constructor(private pbService: PocketbaseService, private navCtrl: NavController) {}

  /*
  async onRegister(){
    if(this.registerForm.valid){
      const {usuario, contraseña} = this.registerForm.value;
      try {
        await this.pocketbaseService.registerUser(usuario,contraseña);
        alert('Registro Exitoso');
      }catch(error){
        console.error('Error en el registro', error);
        alert('Error en el registro. Intentelo de nuevo.');
      }
    }
  }*/

  /*async onRegister(){
    if(this.usuario && this.contraseña){
      try{
      const user = await this.pbService.registerUser(this.usuario, this.contraseña);
      console.log('Usuario registrado: ',user);
      localStorage.setItem('userId',user.id);
      this.navCtrl.navigateRoot('/datos');
    }catch(error){
      console.log('Error al registrar usuario: ',error);
    }
    }
  }*/

  ngOnInit() {}

}
