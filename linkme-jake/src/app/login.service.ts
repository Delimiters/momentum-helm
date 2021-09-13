import { Injectable } from '@angular/core';
import Profile, { ProfilesService } from './profiles.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser = 1;
  private loginStatus = false;

  constructor(public profilesService: ProfilesService) {
    this.currentUser =
      parseInt(localStorage.getItem('USER') || '0') ||
      this.getCurrentProfile().id;
  }

  login() {
    this.loginStatus = true;
  }

  logout() {
    this.loginStatus = false;
  }

  get isLoggedIn() {
    return this.loginStatus;
  }

  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(user: number) {
    this.currentUser = user;
    localStorage.setItem('USER', this.currentUser.toString());
  }
  getCurrentProfile() {
    return (
      this.profilesService.getProfile(this.currentUser) ||
      this.profilesService.getProfiles()[0]
    );
  }
  getOtherProfiles() {
    return this.profilesService
      .getProfiles()
      .filter((obj: Profile) => obj !== this.getCurrentProfile());
  }
}
