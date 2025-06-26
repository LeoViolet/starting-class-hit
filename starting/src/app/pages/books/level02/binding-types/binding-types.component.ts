import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
/** Falando sobre Type, tipagem do Typescript */
type user = {
  name: string,
  email: string,
  isAdmin: boolean,
  avatar?: string,
}

@Component({
  selector: 'app-binding-types',
  imports: [CommonModule, FormsModule],
  templateUrl: './binding-types.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class BindingTypesComponent {
  protected user: user = {name: 'Leo', email: 'oficinadosdrones@gmail.com',
    isAdmin: true, avatar:"./../../../../../assets/img/avatar/Bachira-1.jpg"}
}
