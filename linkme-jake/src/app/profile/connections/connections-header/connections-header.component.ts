import { Component, Input } from '@angular/core';
import Profile from 'src/app/profile.model';

@Component({
  selector: 'app-connections-header',
  templateUrl: './connections-header.component.html',
  styleUrls: ['./connections-header.component.scss'],
})
export class ConnectionsHeaderComponent {
  @Input() userProfile!: Profile;

  constructor() {}
}
