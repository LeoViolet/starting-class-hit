import { PromisesService } from './../../../../../_services/promises.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent {
  protected PromisesService = inject(PromisesService)
  protected localPromise: any;

  ngOnInit(): void {
    console.log("Promise is Component: ")
    console.log("Promise in Component: ", this.PromisesService.getPromise());
    console.log("promiseValue: ", this.PromisesService.promiseValue);
  }
}
