import { AuthGmailService } from './../../../_services/auth-gmail.service';
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

export class SigninComponent {
  protected router = inject(Router)
  protected gmailService = inject(AuthGmailService);
  email: string = '';
  password: string = '';
  isValid!: boolean;
 
 
  onSubmit(form: any): void {
    if (!form.valid) {
      this.isValid = false;
    }
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.gmailService.signIn(this.email, this.password).subscribe({
      next: (res) => {console.log("Data From Google: ", res.user), this.router.navigateByUrl('/')},
      error: (e) => {console.error("Error in Gmail Authentication"), this.router.navigateByUrl('/')}
    })
  }
 
  goBack(): void {
    this.router.navigateByUrl("/")
  }
 
  clearFields(): void {
    this.email = '';
    this.password = '';
  }
 
}