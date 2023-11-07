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
    // En el método ngOnInit, puedes obtener las transacciones desde tu servicio
    this.transaccionesService.getTransacciones().subscribe((data: any) => {
      this.transacciones = data; // Asigna los datos al arreglo de transacciones
    });
  }
}
