import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Profile, { ProfilesService } from '../profiles.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileIndex?: number;
  //profile: Profile = this.profilesService.getProfile(this.profileIndex)!; //i know this is bad practice to use ! here but i figure it's fine since this is just a test project
  name: string = 'Profile Editing Page';
  //profileIdObservable$: Observable;

  constructor(
    public profilesService: ProfilesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileIndex = params['id'];
    });
  }
  onNewExperience(experience: string) {
    this.profilesService.addExperience(this.profileIndex!, experience);
  }
  getCurrentProfile() {
    return this.profilesService.getProfile(this.profileIndex!);
  }
}
