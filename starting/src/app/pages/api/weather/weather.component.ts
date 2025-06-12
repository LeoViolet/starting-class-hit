import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = '';
}
