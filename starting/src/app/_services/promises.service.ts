import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {
  protected promise = new Promise(resolve => resolve('Nossa Promessa'));
  protected promiseValue: any = null;
  constructor() {
      this.promise.then(value => console.log("Promise in Service", value))
  }
  getPromise() {
    this.promise.then(res => this.promiseValue = res + 'Agora foi modificada')
  }
}
