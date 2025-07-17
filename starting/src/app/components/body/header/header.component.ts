import { AuthGmailService } from './../../../_services/auth-gmail.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  protected AuthGmailService = inject(AuthGmailService)

}
