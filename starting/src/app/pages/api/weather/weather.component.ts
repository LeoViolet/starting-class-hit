import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../../_services/weather.service';
import { IWeather } from '../../../_share/interfaces/weather';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  protected localWeatherSig = signal<IWeather | undefined>(undefined)
  protected localCountry = "Lisbon";

    ngOnInit(): void {
      this.weatherService.getWeather(this.localCountry).subscribe({
        next: (result) => {this.localWeatherSig.set(result)
          console.log("RES In WeatherComponent: ", this.localWeatherSig());
        },
        error: (e) => {console.log("Error in the Weather API: ", e)}
      });
    console.log("Variável localWeatherSig fora do Observable (Undefined): ", this.localWeatherSig());
  }
}
