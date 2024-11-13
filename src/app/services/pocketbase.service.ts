import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PocketbaseService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://localhost:8090'); // Cambia la URL si es necesario
  }


  createUser(data: { nombre: string; apellido: string;rut: string; correo: string; tipo: string ;username: string; password: string; passwordConfirm: string; }) {
    return this.pb.collection('usuarios').create(data);
  }

  login(username: string, password: string) {
    return from(this.pb.collection('usuarios').authWithPassword(username, password));
  }

  async getCurrentUser(): Promise<any> {
    try {
      return this.pb.authStore.model; 
    } catch (error) {
      console.error("Error al obtener el usuario autenticado:", error);
      throw error;
    }
  }
  // Función para guardar un string en la colección 'codigos_qr'
  saveStringToDatabase(codigo: string) {
    const data = { codigo: codigo };
    return this.pb.collection('codigos_qr').create(data);
  }

  // Funcion para que se guarde un usuario al registrarse
  /*async registerUser(usuario: string, contraseña: string){
    return await this.pb.collection('users').create({
      usuario: usuario,
      contraseña: contraseña,
    })
  }*/

  async registerUser(usuario: String, contraseña: String): Promise<any>{
    try{
      const user = await this.pb.collection('users').create({
        usuario: usuario,
        contraseña: contraseña,
      })
      return user;
    }catch(error){
      console.error('Error al registrar usuario: ',usuario);
      throw error;
    }
  }

  async getUserData(userId: string): Promise<any>{
    try{
      const user = await this.pb.collection('users').getOne(userId);
      return user;
    }catch(error){
      console.error('Error al obtener datos del usuario: ',error);
      throw error;
    }
  }


}
