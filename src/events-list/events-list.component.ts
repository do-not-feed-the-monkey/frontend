import { Component, OnInit } from '@angular/core';
import { EventsService } from './../events.service';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { TableModule, TableRowExpandEvent, TableRowCollapseEvent } from 'primeng/table';
import { IEvent } from '../interfaces/event.interface';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'events-list',
  imports: [ CommonModule, FormsModule, EventDetailsComponent, 
    TableModule, TagModule, ToastModule, HttpClientModule,
    RatingModule,CheckboxModule, ButtonModule, 
    ],
    standalone:true,
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];
  expandedRows: any = {};
  detailsOpen: boolean = false;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe({
      next: (data) => {
        console.log('data', data);
        this.events = data.items;
      },
      error: (err) => console.error('No events', err),
    });
  }

  // expandAll() {
  //   this.expandedRows = this.events.reduce((acc: { [x: string]: boolean }, p: { id: string | number }) => (acc[p.id] = true) && acc, {});
  // }

  // collapseAll() {
  //   this.expandedRows = {};
  // }

  onRowExpand(event: TableRowExpandEvent) {
    console.log('onRowExpand');
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    console.log('onRowCollapse');
  }

  getRowClass(event: any): string {
    return event.acknowledged ? 'acknowledged-row' : '';
  }

  rowClass(event: any) {
    return { '!bg-primary !text-primary-contrast': event.acknowledged === 'Fitness' };
}

  toggleRow(event: any) {
    if (this.isRowExpanded(event)) {
      delete this.expandedRows[event.id];
    } else {
      this.expandedRows[event.id] = event;
    }
  }

  isRowExpanded(event: any): boolean {
    return !!this.expandedRows[event.id];
  }

  openCloseDetailsComponent() {
    this.detailsOpen = !this.detailsOpen;
  }

  getEvents() {
    const mockArray = [
      {
        name: 'Hackathon',
        timeCreation: '10-05-2025',
        location: 'Lublin',
        text: 'Civil defense',
      },
    ];
    return of(mockArray);
  }
}
