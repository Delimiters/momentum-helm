import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  selectedProfile: number | null = null;

  constructor(
    public loginService: LoginService,
    public router: Router,
    public profilesService: ProfilesService
  ) {}

  ngOnInit(): void {
    this.loginService.logout();
  }

  onClickProfile(id: number) {
    this.selectedProfile = id;
  }

  onLoginClicked() {
    if (this.selectedProfile) {
      this.loginService.setCurrentUser(this.selectedProfile || 0);
      this.loginService.login();
      this.router.navigate(['']);
    }
  }
}
