import { Component, Input, Output, EventEmitter } from '@angular/core';
import Profile from 'src/app/profile.model';

@Component({
  selector: 'app-connection-cell',
  templateUrl: './connection-cell.component.html',
  styleUrls: ['./connection-cell.component.scss'],
})
export class ConnectionCellComponent {
  constructor() {}

  @Input() connectionProfile!: Profile;
  @Input() currentUserProfile!: Profile;
  @Output() newConnectionEvent = new EventEmitter<Profile>();

  onConnectClicked() {
    console.log('Emitting new connection event');
    this.newConnectionEvent.emit(this.connectionProfile);
  }

}
