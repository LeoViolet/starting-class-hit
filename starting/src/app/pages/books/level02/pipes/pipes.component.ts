import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpcaseFirstwordPipe } from "../../../../_share/pipes/upcase-firstword.pipe";

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, UpcaseFirstwordPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class PipesComponent {
  protected price = 99.99;
  protected totay = new Date();
  protected text = "Angular Pipes";
}
