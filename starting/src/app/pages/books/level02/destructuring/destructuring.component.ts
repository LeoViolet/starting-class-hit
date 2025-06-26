import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  imports: [CommonModule],
  templateUrl: './destructuring.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class DestructuringComponent {
  protected nome!: string;
  protected idade!: string | number;
  protected apelido!: string;
  protected email!: string;
  protected email2!: string;
  protected primeiro!: number;
  protected segundo!: number;
  constructor () {
    const pessoa = {
      nome: "Leo",
      idade: 18,
      cidade: "Seixal",
      apelido: "mutiz",
      email: "oficinadosdrones@gmail.com"
    };

    ({nome: this.nome, idade: this.idade} = pessoa);
    console.log("Desconstrulção com nome iguais: ", this.nome, this.idade);

    ({apelido: this.apelido, email: this.email = "abc@gmail.com"} = pessoa);
    console.log("Desconstrução com valor Padrão: ", this.apelido, this.email2);

    const numeros = [10,20,30];

    [this.primeiro, this.segundo] = numeros;
    console.log("Array: 1º: ", this.primeiro, "2º: ", this.segundo);
  }
  exemploMetodo (nome:string = 'Leo') {

  }
}
