import { Component, Input, Output, EventEmitter } from '@angular/core';
import Profile, { ProfilesService } from 'src/app/profiles.service';

@Component({
  selector: 'app-connection-cell',
  templateUrl: './connection-cell.component.html',
  styleUrls: ['./connection-cell.component.scss'],
})
export class ConnectionCellComponent {
  constructor(public profilesService: ProfilesService) {}

  @Input() connectionProfileIndex!: number;
  @Input() currentUserProfileIndex!: number;
  @Output() newConnectionEvent = new EventEmitter<number>();

  getUserProfile() {
    return this.profilesService.getProfile(this.currentUserProfileIndex);
  }

  getConnectionProfile() {
    return this.profilesService.getProfile(this.connectionProfileIndex);
  }

  onConnectClicked() {
    console.log('Emitting new connection event');
    this.newConnectionEvent.emit(this.connectionProfileIndex);
  }
}
