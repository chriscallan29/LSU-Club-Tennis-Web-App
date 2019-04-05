import { NgModule } from '@angular/core';

// These is the Route library as well as the route imports from each component
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';

// This is the route path setting that determines the path and what component
// it corresponds to. 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'support', component: SupportComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // These imports enable the webpage to reset its position back to the top when
      // switching pages. This way the user isn't automatically brought to a lower portion of the web page.
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
