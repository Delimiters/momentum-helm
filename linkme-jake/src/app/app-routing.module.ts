import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { ConnectionsComponent } from './profile/connections/connections.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent,
    children: [{ path: ':id', component: ProfileComponent }],
  },
  { path: 'connections', component: ConnectionsComponent },
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
