import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidatos-detail',
  standalone: true,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candidato: any;

  constructor() {}
  ngOnInit() {}
}
