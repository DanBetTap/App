import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';



@Component({
  selector: 'app-codigosqr',
  templateUrl: './codigosqr.page.html',
  styleUrls: ['./codigosqr.page.scss'],
})
export class CodigosqrPage implements OnInit {

  segment = 'generate';
  qrText = '';


  constructor(
    private navCtrl: NavController,
    private loadingControler: LoadingController,
    private platform: Platform,

   ) {
    
   }
   goBack() {
    this.navCtrl.back(); // Método para regresar a la página anterior
  }

  ngOnInit() {
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
