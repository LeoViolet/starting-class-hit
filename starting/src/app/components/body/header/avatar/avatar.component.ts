import { Observable } from 'rxjs';
import { AuthGmailService } from './../../../../_services/auth-gmail.service';
import { Component, inject } from '@angular/core';
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})

export class AvatarComponent {
  private AuthGmailService = inject(AuthGmailService);
  protected localuser: Observable<User | null> = this.AuthGmailService.getUser();

  logout() {
    this.AuthGmailService.logOut().subscribe();
  }
}
