import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigosqr',
  templateUrl: './codigosqr.page.html',
  styleUrls: ['./codigosqr.page.scss'],
})
export class CodigosqrPage implements OnInit {

  segment = 'generate';
  qrText = '';

  constructor() { }

  ngOnInit() {
  }

}
