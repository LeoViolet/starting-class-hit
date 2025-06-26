import { map, Observable, of } from 'rxjs';
import { DummyObservableService } from './../../../../_services/observable.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable02',
  imports: [CommonModule],
  templateUrl: './observable02.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class Observable02Component {
  dummyObservableService = inject(DummyObservableService);
  protected localObservable$!: Observable<string | undefined>; 
  private router = inject(Router)
  protected localLoad = false;
  protected localError: string = '';
  protected counter = 0;

  updateObs () {
    this.counter = this.counter + 1;
    this.localObservable$ = this.localObservable$.pipe(map((d) => {console.log(d + ' ' + this.counter); return d + ' ' + this.counter;}));
    /**É uma Brincadeira para vermos os operadores */
    // this.localObservable$ = this.localObservable$.pipe(exhaustMap((d) =>  {console.log(d + ' ' + this.counter); return d + ': ' + this.counter;}));
    // this.localObservable$ = this.localObservable$.pipe(concatMap((d) =>  {console.log(d + ' ' + this.counter); return d + ' ' + this.counter;}));
    //  this.localObservable$ = this.localObservable$.pipe(switchMap((d) =>  {console.log(d + ' ' + this.counter);  return d + ' ' + this.counter;}));
  }

  resetObs () {
    this.counter = 0;
    this.localObservable$ = of(undefined);
    setTimeout(() => {
      this.router.lastSuccessfulNavigation;
    }, 2000)
  }
}
