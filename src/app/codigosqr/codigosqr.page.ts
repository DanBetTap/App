import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-codigosqr',
  templateUrl: './codigosqr.page.html',
  styleUrls: ['./codigosqr.page.scss'],
})
export class CodigosqrPage implements OnInit {

  segment = 'generate';
  qrText = '';

  constructor(private navCtrl: NavController) {
    
   }
   goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }
  ngOnInit() {
  }

}
