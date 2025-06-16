import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { DummyObservableService } from './observable.service';
import { toSignal } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class SignalService {

  localToSignal: Signal<string | undefined>;
  name: WritableSignal<string | undefined> = signal<string | undefined>(undefined);
  dummySignal: WritableSignal<string | undefined > = signal<string | undefined>(undefined);
  constructor(private dummyObservableService: DummyObservableService) {

    this.localToSignal = toSignal(dummyObservableService.dummyAsyncObservable());
    this.name.set("Leo");
    this.dummySignal.set("Welcome Signal")

  }

  // getDummySig = () => {
  //   setTimeout(() => {
  //     this.dummySignal.set("Welcome Signal");
  //   }, 1000 );
  // }
}
