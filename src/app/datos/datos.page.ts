import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  usuario: string = '';

  constructor(private navCtrl: NavController) { }
  goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }

  ngOnInit() {}

}
