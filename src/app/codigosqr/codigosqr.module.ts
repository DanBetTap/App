import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigosqrPageRoutingModule } from './codigosqr-routing.module';

import { CodigosqrPage } from './codigosqr.page';
import { QrCodeModule } from 'ng-qrcode';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigosqrPageRoutingModule,
    QrCodeModule
  ],
  declarations: [CodigosqrPage, BarcodeScanningModalComponent]
})
export class CodigosqrPageModule {}
