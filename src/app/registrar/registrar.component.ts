import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, validators } from '@angular/forms';
import { PocketbaseService } from '../services/pocketbase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent  implements OnInit {
  registerForm: FormGroup;

  //usando el constructor para dejar las validaciones de registro de usuario
  constructor(
    private fb: FormBuilder,
    private pocketbaseService: PocketbaseService) {
      this.registerForm = this.fb.group({
        usuario: ['', [validators.required, validators.usuario]],
        contraseña: ['', [validators.required, validators.pattern('^[0-9]{1,4}$')]]// solo numeros
      })
    }

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
  }

  ngOnInit() {}

}
