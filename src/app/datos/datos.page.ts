import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PocketbaseService } from '../services/pocketbase.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  usuario: string = '';
  contraseña: String = '';
  user: any;

  constructor(
    private navCtrl: NavController,
    private pbService: PocketbaseService
  ) { }
  goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }

  async onRegister(){
    if(this.usuario && this.contraseña){
      try{
        const user = await this.pbService.registerUser(this.usuario, this.contraseña);
        console.log('Usuario registrado', user);
        localStorage.setItem('userId',user.id);
        this.navCtrl.navigateRoot('/datos');
      }catch(error){
        console.error('Error al registrar el ususario: ',error);
      }
    }
  }

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData(){
    const userId = localStorage.getItem('userId');
    if(userId){
      try{
      this.user = await this.pbService.getUserData(userId);
      console.log('Datos del usuario: ', this.user);
      }catch (error){
        console.error('Error al obtener el dato del usuario: ',error);
      }
    }else{
      console.log('Usuario no encontrado');
    }
  }

}
