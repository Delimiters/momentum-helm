import { Component, ContentChild, Input } from '@angular/core';
import Profile, { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profileIndex!: number;
  //profile: Profile = this.profilesService.getProfile(this.profileIndex)!; //i know this is bad practice to use ! here but i figure it's fine since this is just a test project
  @Input() name!: string;

  constructor(public profilesService: ProfilesService) {}
  onNewExperience(experience: string) {
    this.profilesService.addExperience(this.profileIndex, experience);
  }
  getCurrentProfile() {
    return this.profilesService.getProfile(this.profileIndex);
  }
}
