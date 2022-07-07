import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentGeneralComponent } from './components/agent-general/agent-general.component';
import { BandGeneralComponent } from './components/band-general/band-general.component';
import { BandsComponent } from './components/bands/bands.component';
import { BookingBandComponent } from './components/booking-band/booking-band.component';
import { DancingBarComponent } from './components/dancing-bar/dancing-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MembersAddComponent } from './components/members-add/members-add.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { ProfileBandComponent } from './components/profile-band/profile-band.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpBandsComponent } from './components/sign-up-bands/sign-up-bands.component';
import { SignUpBarsComponent } from './components/sign-up-bars/sign-up-bars.component';
import { SignUpGeneralComponent } from './components/sign-up-general/sign-up-general.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bands', component: BandsComponent},
  {path: 'bars', component: DancingBarComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpGeneralComponent},
  {path: 'signbars',component: SignUpBarsComponent},
  {path: 'signbands',component: SignUpBandsComponent},
  {path: 'bandgen',component: BandGeneralComponent},
  {path: 'agentgen',component: AgentGeneralComponent},
  {path: 'profileband',component: ProfileBandComponent},
  {path: 'bookingband',component: BookingBandComponent},
  {path: 'addmember', component: MembersAddComponent},
  {path: 'memberlist', component: MembersListComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
