import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class PocketbaseService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://localhost:8090'); // Cambia la URL si es necesario
  }

  // Función para guardar un string en la colección 'codigos_qr'
  saveStringToDatabase(codigo: string) {
    const data = { codigo: codigo };
    return this.pb.collection('codigos_qr').create(data);
  }

  // Funcion para que se guarde un usuario al registrarse
  async registerUser(usuario: string, contraseña: string){
    return await this.pb.collection('users').create({
      usuario: usuario,
      contraseña: contraseña,
    })
  }
}
