import { Component } from '@angular/core';
import Profile, { profiles } from './profile.model';
import Board from './board.model';
import { BoardComponent } from './board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'linkme-jake';
  profiles: Profile[] = profiles;

  ngOnInit() {
    setTimeout(() => {
      this.firstProfileSet = 'Bob';
      this.profiles[1].firstName = 'Thomas';
    }, 3000);
  }

  firstProfile() {
    return this.profiles[0];
  }

  get firstProfileGet() {
    return this.firstProfile();
  }

  set firstProfileSet(value: string) {
    this.firstProfile().firstName = value;
  }

  onClick() {
    this.firstProfileSet = 'Atul';
  }
}
