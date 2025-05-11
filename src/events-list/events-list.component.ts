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
import { Dialog } from 'primeng/dialog';
import { PanicIndicatorComponent } from '../panic-indicator/panic-indicator.component';

@Component({
  selector: 'events-list',
  imports: [ CommonModule, FormsModule, EventDetailsComponent, 
    PanicIndicatorComponent,
    TableModule, TagModule, ToastModule, HttpClientModule,
    RatingModule,CheckboxModule, ButtonModule, Dialog
    ],
    standalone:true,
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: any = [];
  detailsOpen: boolean = false;
  expandedRows: Set<number> = new Set();
  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  visible: boolean = false;
  confirmDialogVisible = false;
  pendingEvent: any = null;
  pendingValue: boolean = false;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe({
      next: (data) => {
        this.events = data.items;
      },
      error: (err) => console.error('No events', err),
    });
  }
  onCheckboxChange(event: Event, item: any) {
    // Zapamiętaj obiekt i nową wartość, ale nie ustawiaj jej jeszcze
    this.pendingEvent = item;
    this.pendingValue = (event.target as HTMLInputElement).checked;
  
    // Otwórz okno potwierdzenia
    this.visible = true;
  
    // Cofnij zaznaczenie checkboxa wizualnie — opcjonalne
    (event.target as HTMLInputElement).checked = !this.pendingValue;
  }

  showDialog() {
    this.visible = true;
  }

  confirmChange() {
    if (this.pendingEvent) {
      this.pendingEvent.acknowledged = this.pendingValue;
    }
    this.resetConfirmation();
  }

  cancelChange(event: any) {
    // Nie zmieniaj modelu, tylko zamknij dialog
    event.acknowledged = false;
    this.resetConfirmation();
  }
  
  resetConfirmation() {
    this.visible = false;
    this.pendingEvent = null;
    this.pendingValue = false;
  }

  setEventAcknowledgedAsFalse(event: any) {
    event.acknowledged = false;
  }

  get sortedEvents() {
    if (!this.sortField) return this.events;

    return [...this.events].sort((a, b) => {
      const aVal = a[this.sortField];
      const bVal = b[this.sortField];
      if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  sortBy(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
  }

  toggleExpanded(event: any) {
    if (this.expandedRows.has(event.id)) {
      this.expandedRows.delete(event.id);
    } else {
      this.expandedRows.add(event.id);
    }
  }

  isExpanded(event: any): boolean {
    return this.expandedRows.has(event.id);
  }

  getRowClass(event: any): string {
    return event.acknowledged ? 'acknowledged-row' : '';
  }

  rowClass(event: any) {
    return { '!bg-primary !text-primary-contrast': event.acknowledged === 'Fitness' };
}

  // toggleRow(event: any) {
  //   if (this.isRowExpanded(event)) {
  //     delete this.expandedRows[event.id];
  //   } else {
  //     this.expandedRows[event.id] = event;
  //   }
  // }

  // isRowExpanded(event: any): boolean {
  //   return !!this.expandedRows[event.id];
  // }

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
