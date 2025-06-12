import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent {
  seekData$ = ():Observable<string> => {
    return new Observable(observer => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (!success) {
          observer.error("Error: Falha ao Carregar dados!");
        }
        observer.next("Dados Carregados com Sucesso!");
        observer.complete();
      },1500);
    });

  }
}
