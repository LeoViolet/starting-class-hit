import { Component, inject } from '@angular/core';
import { AuthGmailService } from '../../_services/auth-gmail.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  private authGmailService = inject(AuthGmailService);
  protected localuser: Observable<User | null> = this.authGmailService.getUser();
}
