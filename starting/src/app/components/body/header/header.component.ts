import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  casa = {porta: 'porta azul', quantPorta: 2, arca: {marca: 'LG', modelo: 'xpto'}};
 
  constructor() {
    console.log("CASA", this.casa);
    console.log("CASA-Arca", this.casa.arca);
    console.log("CASA-arca-modelo", this.casa.arca['modelo']);
    console.log("CASA-porta", this.casa.porta);
    console.log("CASA-quant-porta", this.casa.quantPorta);
   
  }

}
