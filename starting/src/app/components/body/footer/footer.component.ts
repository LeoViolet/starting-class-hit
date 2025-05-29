import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  protected dateTime;
  private routerinject = inject(Router); // Cria a nova forma de injeção
  // cria a forma tradicional de injeção usado nos services ou components
  constructor(private router: Router) {
    //35
    this.dateTime = DateTime.now()
  };
  // Construtor do Angular
  ngOnInit(): void {

  };
  /**Uso quando tenho um botão no html que precisa mudar de rota assim que for clicado */
  ChangeRoute () {
    this.router.navigateByUrl('/hit-class/project')
    this.routerinject.navigateByUrl('/hit-class/project')
  };
  /**Uso quando tenho um botão no html que precisa mudar de rota assim que for clicado */
  ChangeRouterN = () =>  {
    this.router.navigate(['/hit-class/project'])
    this.routerinject.navigate(['/hit-class/project'])
  };
}
