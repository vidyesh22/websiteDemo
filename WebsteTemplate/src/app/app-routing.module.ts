import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { PremiumMembersComponent } from './premium-members/premium-members.component';
import { HomeComponent } from './home/home.component'; 
import { FreeMembersComponent } from './free-members/free-members.component' ;
import { PremiumPlansComponent } from './premium-plans/premium-plans.component';
import { HappyStoriesComponent } from './happy-stories/happy-stories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component:HomeComponent  },
  { path: 'Members', component:MembersComponent  },
  { path: 'PremiumMembers', component:PremiumMembersComponent },
  { path: 'FreeMembers', component:FreeMembersComponent  },
  { path: 'Plans', component:PremiumPlansComponent },
  { path: 'stories', component:HappyStoriesComponent },
  { path: 'Contact', component:ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MembersComponent , PremiumMembersComponent, FreeMembersComponent, PremiumPlansComponent,
  HappyStoriesComponent, ContactUsComponent ]