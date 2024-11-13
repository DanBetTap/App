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
}
