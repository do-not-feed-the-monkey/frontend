// import { CheckboxModule } from 'primeng/checkbox';
// import { PrimeNGModule } from './primeng.module';  // Jeśli masz osobny moduł dla PrimeNG
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardComponent, MenubarComponent, EventsListComponent, EventDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
