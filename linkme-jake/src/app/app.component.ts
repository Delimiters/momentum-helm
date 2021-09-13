import { Component, OnInit } from '@angular/core';
import Board from './board.model';
import { BoardComponent } from './board.component';
import { ProfilesService } from './profiles.service';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

type PageName = 'profile' | 'connections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'linkme-jake';

  pageSelected: PageName = 'profile';

  constructor(
    public profilesService: ProfilesService,
    public loginService: LoginService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {});
  }

  get pageName() {
    return this.pageSelected;
  }

  changePage(page: PageName) {
    this.pageSelected = page;
  }
}
