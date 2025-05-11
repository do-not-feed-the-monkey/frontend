import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EventsService } from '../events.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, ButtonModule,
    CommonModule,     // Dodajemy CommonModule
    HttpClientModule, // Dodajemy HttpClientModule
    TableModule,
  ],
  providers:[MessageService, EventsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'no-fomo-project';
}
