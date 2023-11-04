import { Component } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  tarjetaData: any;

  constructor(private tarjetaService: TarjetaService) {}
  ngOnInit(): void {
    this.tarjetaService.obtenerTarjeta().subscribe((data: any) => {
      this.tarjetaData = data;
    });
  }
}
