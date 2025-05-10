import { Component } from '@angular/core';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { EventsService, Events } from './../events.service';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { of } from 'rxjs';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { IEvent } from '../interfaces/event.interface';

@Component({
  selector: 'app-events-list',
  imports: [TableModule, CommonModule, EventDetailsComponent, TableModule, TagModule, ToastModule, RatingModule, ButtonModule, CommonModule],
  providers:[MessageService],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  checked: boolean | undefined;
  events!: any // IEvent[];
  detailsOpen: boolean = false;
  expandedRows: any = {};
  messageService: any;


  constructor(private eventsService: EventsService) {}

    ngOnInit(): void {
      // this.getEvents().subscribe({
      this.eventsService.getEvents().subscribe({
        next: (data) => {
          console.log('data', data);
          this.events = data.items;
        },
        error: (err) => console.error('No events', err)
      });
    }

    expandAll() {
      this.expandedRows = this.events.reduce((acc: { [x: string]: boolean; }, p: { id: string | number; }) => (acc[p.id] = true) && acc, {});
  }
  collapseAll() {
    this.expandedRows = {};
}
onRowExpand(event: TableRowExpandEvent) {
  console.log('onRowExpand')
  // this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
}

onRowCollapse(event: TableRowCollapseEvent) {
  console.log('onRowCollapse');
  // this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
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
      console.log('clicked');
      if(this.detailsOpen) {
        this.detailsOpen = false;
      } else {
        this.detailsOpen = true;
      }
    }

    getEvents() {
      console.log('events');
      const mockArray = [
        {
          name:'Hackathon',
          timeCreation:'10-05-2025',
          location:'lublin',
          text:'Civil defense'
        }
      ]
      return of(mockArray);
    }
}
