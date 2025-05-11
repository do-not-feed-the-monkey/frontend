import { Component } from '@angular/core';
// import { CardModule } from 'primeng/card';
// import { ChartModule } from 'primeng/chart';
// import { TableModule } from 'primeng/table';
// import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from '../menubar/menubar.component';
import { EventsListComponent } from '../events-list/events-list.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'dashboard',
  imports: [MenubarComponent, EventsListComponent, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: any;
  products: any[] = [];

  ngOnInit(): void {
  }
}
