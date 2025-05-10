import { CheckboxModule } from 'primeng/checkbox';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; 
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent, 
    EventsListComponent,
    EventDetailsComponent, 
    DashboardComponent, 
    MenubarComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    TableModule,    
    ButtonModule,  
    CheckboxModule, 
    FormsModule,
    ButtonModule,
    ChartModule,
    MenubarModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
