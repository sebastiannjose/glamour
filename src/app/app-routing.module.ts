import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { EventDetailComponent } from './events/event-detail.component';
import { EventListComponent } from './events/event-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'event/:id', component: EventDetailComponent },
  {
    path: 'events',
    component: EventListComponent,
    data: { title: 'Event Listings' }
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
      AboutUsComponent,
      EventDetailComponent,
      EventListComponent,
      PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true}) // Debugging purposes only
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
