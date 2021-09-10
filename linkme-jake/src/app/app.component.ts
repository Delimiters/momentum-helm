import { Component } from '@angular/core';
import Board from './board.model';
import { BoardComponent } from './board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'linkme-jake';
  // profiles: Profile[] = profiles;
  // profilesWithoutUser: Profile[] = Array.from(profiles).slice(1);
}
