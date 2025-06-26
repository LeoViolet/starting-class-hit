import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DummyObservableService } from '../../../../_services/observable.service';
import { Subscription, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent {
  protected observableService$ = inject(DummyObservableService);
  private router = inject(Router)
  protected localLoad = false;
  protected message: string = "";
  protected localerror: string = "";
  private unSub!: Subscription;
  private unSubRxJs!: Subscription;

  loadData() {
    this.localLoad = true;
    //this.observableService$.dummySeekData$().subscribe(d => console.log("Observable() ", d));
    console.log("Síncrono() ");
    this.unSub = this.observableService$.dummySeekData$().subscribe({
      next: (res) => {console.log("Success "), this.message = res, this.router.navigateByUrl("/angular")},
      error: (err) => {console.log("Error "), this.localerror = err, this.router.navigateByUrl("/not-found")},
      complete: () => console.log("Complete: ")
  });
  }


  loadDataRxJs = () => {
    this.unSubRxJs = this.observableService$.dummyDataObservableRxJsOf().pipe(take(1)).subscribe({
      next: (resut) =>  this.message = resut as string,
      error: (err:string) => this.localerror = err,
      complete: () => console.log("Is Done Observable: ")
  });
  };

  ngOnDestroy(): void {
    this.unSub?.unsubscribe();
    this.unSubRxJs?.unsubscribe();
  }
}

