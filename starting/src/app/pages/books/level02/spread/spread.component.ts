import { Component } from '@angular/core';

@Component({
  selector: 'app-spread',
  imports: [],
  templateUrl: './spread.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class SpreadComponent {
  protected numerosOriginal = [1,2,3];
  protected numerosComSpread: any = [];
  protected pessoaOriginal = {name: 'tony', age:40};
  protected pessoaComSpread: any = {};
  protected pessoaComSpreadClone: any = {};

  ngOnInit(): void {
    this.numerosComSpread = [...this.numerosOriginal, 4, 5];
    this.pessoaComSpread = {...this.pessoaOriginal};
    this.pessoaComSpreadClone = {...this.pessoaOriginal, address: 'estrada regional 404'};
  }
}
