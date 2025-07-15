import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SignInComponent {
  protected router = inject(Router)
  email: string = '';
  password: string = '';
 
 
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
 
  goBack(): void {
    this.router.navigateByUrl("/")
  }
 
  clearFields(): void {
    this.email = '';
    this.password = '';
  }
 
}