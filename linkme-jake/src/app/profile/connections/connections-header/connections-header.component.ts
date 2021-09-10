import { Component, Input } from '@angular/core';
import Profile, { ProfilesService } from 'src/app/profiles.service';

@Component({
  selector: 'app-connections-header',
  templateUrl: './connections-header.component.html',
  styleUrls: ['./connections-header.component.scss'],
})
export class ConnectionsHeaderComponent {
  @Input() userProfileIndex!: number;

  constructor(public profilesService: ProfilesService) {}

  getUserProfile() {
    return this.profilesService.getProfile(this.userProfileIndex);
  }
}
