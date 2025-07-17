import { Component, inject } from '@angular/core';
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { CommonModule } from '@angular/common';
import { PopUpService } from '../../_services/pop-up.service';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  protected PopUpService = inject(PopUpService);
}