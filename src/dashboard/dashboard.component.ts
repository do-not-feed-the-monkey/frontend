import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from '../menubar/menubar.component';
import { EventsListComponent } from '../events-list/events-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MenubarModule, MenubarComponent, EventsListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: any;
  products: any[] = [];

  ngOnInit(): void {
  }
}
