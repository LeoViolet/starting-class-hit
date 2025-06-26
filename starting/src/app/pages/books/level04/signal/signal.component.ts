import { SignalService } from './../../../../_services/signal.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class SignalComponent {
  SignalService = inject(SignalService);
  localToSignalWithoutGet = this.SignalService.localToSignal; // Signal sem get()
  localToSignalWithGet = this.SignalService.localToSignal(); // Signal com get()
  localName = this.SignalService.name;
  localNumber: number = 0;

  constructor () {
    console.log("GetDummy : ", this.SignalService)
  }

  resetObs() {
    this.localNumber = this.localNumber - 1;
    this.localName.set(this.localName() + this.localNumber.toString());
  }
  updateObs() {
    this.localNumber = this.localNumber + 1;
    this.localName.set(this.localName() + this.localNumber.toString());
  }
}