import { Component, OnInit, Output } from '@angular/core';
import { Candidatos } from '../candidatos';
import { dataCandidatos } from '../dataCandidatos';
import { CommonModule } from '@angular/common';
import { CandidatosDetailComponent } from '../candidatos-detail/candidatos-detail.component';

@Component({
  selector: 'app-candidatos-list',
  standalone: true,
   imports: [CommonModule, CandidatosDetailComponent], 
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  selectedCandidato?: Candidatos;
  Candidatos: Array<Candidatos> = [];

  constructor() { }

  getCandidatosList(): Array<Candidatos> {
    return dataCandidatos;
  }

  ngOnInit() {
    this.Candidatos = this.getCandidatosList();
  }

  candidatoSeleccionado(candidato: Candidatos): void {
    this.selectedCandidato = candidato
  }

  

}
