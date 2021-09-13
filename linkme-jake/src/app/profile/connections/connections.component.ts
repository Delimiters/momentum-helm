import { Component, Input } from '@angular/core';
import Profile from 'src/app/profiles.service';
import { ProfilesService } from 'src/app/profiles.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent {
  // @Input() profileIndex!: number;

  constructor(
    public profilesService: ProfilesService,
    public loginService: LoginService
  ) {}

  // @Input() userProfile!: Profile;
  // @Input() otherProfiles!: Profile[];

  getUserProfile() {
    return this.loginService.getCurrentProfile();
  }
  getOtherProfiles() {
    return this.loginService.getOtherProfiles();
  }

  onNewConnection(connection: number) {
    console.log('New connection being pushed!');
    if (
      !this.profilesService.isConnected(
        this.loginService.getCurrentUser(),
        connection
      )
    ) {
      this.profilesService.connect(
        this.loginService.getCurrentUser(),
        connection
      );
    } else {
      this.profilesService.disconnect(
        this.loginService.getCurrentUser(),
        connection
      );
    }
  }
}
