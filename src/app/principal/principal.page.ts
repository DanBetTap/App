import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocketbaseService } from '../services/pocketbase.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuario: string = '';

  constructor(private pocketBaseService: PocketbaseService) {} // Inyectar el servicio

  ngOnInit() {
    this.obtenerUsuario();
  }

  async obtenerUsuario() {
    try {
      const authData = await this.pocketBaseService.getCurrentUser(); 
      this.usuario = authData.nombre; 
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  }
}