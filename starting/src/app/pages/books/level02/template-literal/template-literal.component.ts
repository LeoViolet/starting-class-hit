import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-literal',
  imports: [CommonModule],
  templateUrl: './template-literal.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class TemplateLiteralComponent {
  protected name = "Leo";
  protected course = "Angular";
  example = `Ola ${this.name}, bem vindo ao curso de ${this.course}`
}
