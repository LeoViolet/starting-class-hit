import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../../_services/weather.service';
import { IWeather } from '../../../_share/interfaces/weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather$.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  protected localWeather$: Observable<IWeather> | undefined;
  protected localCountry = "Lisbon";
  protected weather: IWeather | undefined;

    ngOnInit(): void {
      this.localWeather$ = this.weatherService.getWeather(this.localCountry);
    }
}
