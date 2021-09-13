import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent {
  constructor(public profilesService: ProfilesService, public loginService: LoginService) {}
}
