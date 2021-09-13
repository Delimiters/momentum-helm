import { Component } from '@angular/core';
import Board from './board.model';
import { BoardComponent } from './board.component';
import { ProfilesService } from './profiles.service';
import { LoginService } from './login.service';

type PageName = 'profile' | 'connections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'linkme-jake';

  pageSelected: PageName = 'profile';

  constructor(
    public profilesService: ProfilesService,
    public loginService: LoginService
  ) {}

  get pageName() {
    return this.pageSelected;
  }

  changePage(page: PageName) {
    this.pageSelected = page;
  }
}
