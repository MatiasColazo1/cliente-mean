import { Component } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  tarjetaData: any;

  constructor(private tarjetaService: TarjetaService) {}
  ngOnInit(): void {
    this.tarjetaService.obtenerTarjeta().subscribe((data: any) => {
      this.tarjetaData = data;
    });
  }
}
