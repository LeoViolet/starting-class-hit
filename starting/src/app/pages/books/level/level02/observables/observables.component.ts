import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ObservableService } from '../../../../../_services/observable.service';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent {
  protected observableService = inject(ObservableService);
  protected localLoad = false;
  protected message: string = "";
  protected localerror: string = "";

  loadDataRxJs = () => {};
  loadData() {
  throw new Error('Method not implemented.');
  }
}