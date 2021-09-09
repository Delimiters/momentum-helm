import { Component, Input } from '@angular/core';
import Profile from 'src/app/profile.model';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent {
  constructor() {}

  @Input() userProfile!: Profile;
  @Input() otherProfiles!: Profile[];

  onNewConnection(connection: Profile) {
    console.log('New connection being pushed!');
    if (!this.userProfile.connections.includes(connection)) {
      this.userProfile.connections.push(connection);
      connection.connections.push(this.userProfile);
    } else {
      let indexToRemoveFromUserConnections =
        this.userProfile.connections.indexOf(connection);
      this.userProfile.connections.splice(indexToRemoveFromUserConnections, 1);
      let indexToRemoveFromConnectionConnections =
        connection.connections.indexOf(this.userProfile);
      connection.connections.splice(indexToRemoveFromConnectionConnections, 1);
    }
    console.log(
      'Connection profile is included in user profile: ' +
        this.userProfile.connections.includes(connection)
    );
  }
}
