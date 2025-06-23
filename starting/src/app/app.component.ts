import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/body/header/header.component';
import { MainComponent } from './components/body/main/main.component';
import { FooterComponent } from './components/body/footer/footer.component';
import { WeatherService } from './_services/weather.service';
import { ReqresService } from './_services/reqres.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private weather: WeatherService, private reqresService: ReqresService) {
    this.weather.getWeather("Lisbon").subscribe({
      next: (res) => {console.log("RES: ", res)},
      error: (e) => {console.log("Error: ", e)},
      complete: () => console.log("Fim da subscrição")
    });

    this.reqresService.getDataReqresByGet().subscribe({
      next: (res) => {console.log("RES: ", res)},
      error: (e) => {console.error("Error: ", e)},
      complete: () => console.log("Fim da Subscrição")
    })
  }
}
