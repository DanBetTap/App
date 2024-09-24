import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigosqrPage } from './codigosqr.page';

describe('CodigosqrPage', () => {
  let component: CodigosqrPage;
  let fixture: ComponentFixture<CodigosqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigosqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
