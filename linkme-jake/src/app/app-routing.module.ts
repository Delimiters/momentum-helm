import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { ConnectionsComponent } from './profile/connections/connections.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent,
    children: [{ path: ':id', component: ProfileComponent }],
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'connections',
    component: ConnectionsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
