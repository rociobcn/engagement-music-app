import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BandsComponent } from './components/bands/bands.component';
import { DancingBarComponent } from './components/dancing-bar/dancing-bar.component';
import { SignUpGeneralComponent } from './components/sign-up-general/sign-up-general.component';
import { SignUpBandsComponent } from './components/sign-up-bands/sign-up-bands.component';
import { SignUpBarsComponent } from './components/sign-up-bars/sign-up-bars.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BandsListComponent } from './components/bands-list/bands-list.component';
import { DancingBarListComponent } from './components/dancing-bar-list/dancing-bar-list.component';
import { AgentGeneralComponent } from './components/agent-general/agent-general.component';
import { BandGeneralComponent } from './components/band-general/band-general.component';
import { ProfileBandComponent } from './components/profile-band/profile-band.component';
import { BookingBandComponent } from './components/booking-band/booking-band.component';
import { BookingBandCardComponent } from './components/booking-band-card/booking-band-card.component';
import { MembersAddComponent } from './components/members-add/members-add.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MembersListCardComponent } from './components/members-list-card/members-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BandsComponent,
    DancingBarComponent,
    SignUpGeneralComponent,
    SignUpBandsComponent,
    SignUpBarsComponent,
    SignInComponent,
    BandsListComponent,
    DancingBarListComponent,
    AgentGeneralComponent,
    BandGeneralComponent,
    ProfileBandComponent,
    BookingBandComponent,
    BookingBandCardComponent,
    MembersAddComponent,
    MembersListComponent,
    MembersListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
