import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, Platform } from '@ionic/angular';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { PocketbaseService } from '../services/pocketbase.service';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';




@Component({
  selector: 'app-codigosqr',
  templateUrl: './codigosqr.page.html',
  styleUrls: ['./codigosqr.page.scss'],
})
export class CodigosqrPage implements OnInit {

  segment = 'generate';
  qrText = '';
  scanResult = '';


  constructor(
    private navCtrl: NavController,
    private loadingControler: LoadingController,
    private platform: Platform,
    private modalController: ModalController,

    private pocketbaseService: PocketbaseService
   ) {}
   goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }

  async startScan() {
    const modal = await this.modalController.create({
    component: BarcodeScanningModalComponent,
    cssClass: 'barcode-scanning-modal',
    showBackdrop: false,
    componentProps: {
      formats: [],
      lensFacing: LensFacing.Back,
     }
    });
  
    await modal.present();
    //Control de lo que se ve al escanear
    const { data } = await modal.onWillDismiss();

    if(data){
      this.scanResult = data?.barcode?.displayValue;
    }
  
  }

  saveQrString() {
    if (this.qrText) {
      this.pocketbaseService.saveStringToDatabase(this.qrText).then((response) => {
        console.log('String guardado con éxito:', response);
      }).catch((error) => {
        console.error('Error al guardar el string:', error);
      });
    }
  }
  ngOnInit(): void {

    if(this.platform.is('capacitor')){
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }
  }

  // Captura la imagen para hacerla canva y luego obtener imagen
  captureScreen(){
    const element = document.getElementById('qrImage') as HTMLElement;

    html2canvas(element).then((canvas: HTMLCanvasElement) => {
      this.downloadImage(canvas);
      if(this.platform.is('capacitor')) this.shareImage(canvas);
      else this.downloadImage(canvas);
    })
  }

  // Descargar imagen (web)
  downloadImage(canvas: HTMLCanvasElement){
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr.png';
    link.click();
  }

  // Compartir imagen (celular)
  async shareImage(canvas:HTMLCanvasElement){
    let base64 = canvas.toDataURL();
    let path = 'qr.png';

    const loading = await this.loadingControler.create({
      spinner: 'crescent'
    });
    await loading.present();

    await Filesystem.writeFile({
      path,
      data: base64,
      directory: Directory.Cache
    }).then(async (res) => {
      let uri = res.uri;
      await Share.share({url: uri});
      await Filesystem.deleteFile({
        path,
        directory: Directory.Cache
      })
    }).finally(() => {
      loading.dismiss();
    })
  }
}
