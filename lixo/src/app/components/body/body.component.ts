import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet, FooterComponent, MainComponent, HeaderComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
