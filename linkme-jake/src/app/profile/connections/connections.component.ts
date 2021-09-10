import { Component, Input } from '@angular/core';
import Profile from 'src/app/profiles.service';
import { ProfilesService } from 'src/app/profiles.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent {
  @Input() profileIndex!: number;

  constructor(
    public profilesService: ProfilesService //public loginService: LoginService
  ) {}

  // @Input() userProfile!: Profile;
  // @Input() otherProfiles!: Profile[];

  getUserProfile() {
    return this.profilesService.getProfile(this.profileIndex);
  }
  getOtherProfiles() {
    return this.profilesService.getProfiles().slice(1);
  }

  onNewConnection(connection: number) {
    console.log('New connection being pushed!');
    if (!this.profilesService.isConnected(this.profileIndex, connection)) {
      this.profilesService.connect(this.profileIndex, connection);
    } else {
      this.profilesService.disconnect(this.profileIndex, connection);
    }
  }
}
