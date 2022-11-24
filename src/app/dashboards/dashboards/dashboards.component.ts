import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import Swal from 'sweetalert2';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {
  produtos = [
    {
      nome: "Cereal Nestle",
      acesso: 19
    },
    {
      nome: "Caixa Chocolate",
      acesso: 18
    },
    {
      nome: "Sabonete",
      acesso: 12
    },
    {
      nome: "Arroz Branco",
      acesso: 7
    },
    {
      nome: "Queijo branco",
      acesso: 5
    },
    {
      nome: "Banana",
      acesso: 5
    },
    {
      nome: "Achocolatado",
      acesso: 4
    },
    {
      nome: "Vinagre",
      acesso: 3
    },
    {
      nome: "Pão",
      acesso: 2
    },
    {
      nome: "Maçã",
      acesso: 1
    },
  ];

  token: any

  constructor() { 
    
  }

  //@ViewChild("meuCanvas",{static: true}) elemento: ElementRef;

  ngOnInit(){
   this.token = localStorage.getItem("token");

    this.RenderChart();
   
  }

  RenderChart(){
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Cereal', 'Chocolate', 'Sabonete', 'Arroz', 'Queijo', 'Banana'],
        datasets: [{
          label: 'Quantidade de acesso',
          data: [19, 18, 12, 7, 5, 5],
          borderWidth: 1,
          backgroundColor:[
            '#FFB266',
            '#99FFCC',
            '#CCCCFF',
            '#FF99CC',
            '#FF9999',
            '#FFFF99'
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
