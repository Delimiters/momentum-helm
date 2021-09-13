import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ExperienceComponent } from './profile/experience/experience.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ConnectionsComponent } from './profile/connections/connections.component';
import { ConnectionCellComponent } from './profile/connections/connection-cell/connection-cell.component';
import { ConnectionsHeaderComponent } from './profile/connections/connections-header/connections-header.component';
import { GraphQLModule } from './graphql.module';
import { ProfilesComponent } from './profiles/profiles.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ProfileComponent,
    ExperienceComponent,
    ConnectionsComponent,
    ConnectionCellComponent,
    ConnectionsHeaderComponent,
    ProfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzButtonModule,
    NzInputModule,
    NzDropDownModule,
    NzGridModule,
    GraphQLModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
