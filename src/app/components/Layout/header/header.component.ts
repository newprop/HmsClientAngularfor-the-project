import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../Authentication/auth.service';
import { AuthResponse } from '../../../Authentication/auth-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = 'HMS';
  user!: AuthResponse;
  login: boolean = false; // Initialize login variable
  constructor(private authService: AuthService) { } // Inject AuthService in the constructor

  ngOnInit() {
    this.checkLoginStatus(); // Call checkLoginStatus in ngOnInit
  }

  toggleSidebar() {
    // Implement the sidebar toggle logic here if needed
  }

  logout() {
    this.authService.logout();
    this.checkLoginStatus(); // Update login status after logout
  }

  refreshToken() {
    this.authService.refreshToken()?.subscribe(() => { });
  }

  private checkLoginStatus() {
    this.login = this.authService.isLoggedIn();
    if (this.login) {
      this.user = this.authService.getCurrentAuthUser();
    }
  }

}
