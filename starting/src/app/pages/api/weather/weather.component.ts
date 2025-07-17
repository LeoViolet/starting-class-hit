import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { WeatherService } from './../../../_services/weather.service';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeather } from '../../../_share/interfaces/weather';
import { PopUpService } from '../../../_services/pop-up.service';

@Component({
  selector: 'app-weather-channel',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  private WeatherService = inject(WeatherService);
  private popUpService = inject(PopUpService)
  protected weatherForms: UntypedFormGroup;
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry = "Lisbon";
  private justletter: RegExp = /^[a-zA-ZÀ-ÿ\s]+$/;


  constructor(private fb:UntypedFormBuilder){
    this.weatherForms = this.fb.nonNullable.group({
      city: ["", [Validators.required, Validators.pattern(this.justletter)]]
    });

    // Exemplo de como aceder aos controlos do forms
    console.log("Form controls.", this.weatherForms.controls);
    console.log("Form weatherForm.", this.weatherForms.get('city')?.invalid);
  }
  
  ngOnInit(): void{
    this.WeatherService.getWeather(this.localCountry).subscribe({
      next: (res) => {this.localWeatherSig.set(res), console.log("Res In WeatherComponent: ",this.localWeatherSig())},
      error: (e) => {},
      complete: () => {},
    });
  console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig()?.current);
  }

  submit() {
    console.log("nossa cidade", this.weatherForms.get('city')?.value)
    this.localCountry = this.weatherForms.get('city')?.value;
    this.WeatherService.getWeather(this.localCountry).subscribe({
      next:(res) => {this.localWeatherSig.set(res), this.popUpService.show("everyting ok!", "success")},
      error:(e) => {console.error("Error In Api"), this.popUpService.show("ops... Error in API Weater: " + e, 'error')}
    });
  }
}