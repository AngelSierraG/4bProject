import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe,  CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Students } from '../models/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, 
    CommonModule
  ]
})
export class DashboardComponent implements OnInit{
  studentArray: Students[] = [
    {
      id: 1,
      name: 'Yuca',
      asignatures: ['Ingles','POO2','Algoritmos2']
    },
    {
      id: 2,
      name: 'Oswaldo',
      asignatures: ['POO2','Algoritmos2', 'Ingles', 'Estructura de Datos']
    },
    {
      id: 3,
      name: 'Ochoa',
      asignatures: ['POO2', 'Ingles','Algoritmos2', 'WEB']
    },
    {
      id: 4,
      name: 'Hernán',
      asignatures: ['POO2', 'Ingles', 'WEB', 'Algoritmos2', 'Concurrente']
    }
  ] 
 
  ngOnInit(): void {
    console.log(this.studentArray)
  }

  showName(name: string){
    alert(name)
  }

  deleteStudent(id: number){
    var newListStudents: Students[] = this.studentArray 
    this.studentArray = newListStudents.filter(student => student.id != id)
  }

  private breakpointObserver = inject(BreakpointObserver);
  miEstado: boolean = false
  imprime: string = "Subtitulo" 
  imprime2: string = "miEstado" 



 

  


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
