import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit{

  transacciones: any[] = []; 

  constructor(private transaccionesService: TransaccionesService) {}

  ngOnInit(): void {
    this.transaccionesService.getTransacciones().subscribe((data: any) => {
      this.transacciones = data; 
    });
  }
  getEstadoStyle(estado: string): any {
    if (estado === 'Completado') {
      return { color: 'green' };
    } else if (estado === 'Pendiente') {
      return { color: 'gray' };
    } else if (estado === 'Cancelado') {
      return { color: 'red' };
    } else {
      return {}; 
    }
  }
}
