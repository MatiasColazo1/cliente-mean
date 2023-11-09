import { Component, ViewChild, OnInit  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { BalanceService } from 'src/app/services/balance.service';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {

  constructor(private balanceService: BalanceService) { }
  
   ngOnInit() {
    // Llama al servicio para obtener los datos de balance
    this.balanceService.getBalance().subscribe(
      (data: { lastWeekData: any[], thisWeekData: any[] }) => {
        // Filtra y elimina los valores nulos antes de asignarlos a barChartData
        this.barChartData.datasets[0].data = data.lastWeekData.filter(value => value !== null);
        this.barChartData.datasets[1].data = data.thisWeekData.filter(value => value !== null);
      },
      (error) => {
        console.error('Error al obtener los datos de balance:', error);
      }
    );
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 

  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { 
        data: [], 
        label: 'Semana pasada',
        backgroundColor: 'rgba(23, 117, 187, 0.61)', // Color de fondo de la primera barra
        borderRadius: 10,
      },
      { 
        data: [], 
        label: 'Esta semana',
        backgroundColor: 'rgba(7, 3, 94, 0.8)', // Color de fondo de la segunda barra
        borderRadius: 10
      },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  
}

