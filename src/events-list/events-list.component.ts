import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { EventsService, Events } from './../events.service';

@Component({
  selector: 'app-events-list',
  imports: [TableModule, CommonModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  checked: boolean | undefined;
  events!: any;

  constructor(private eventsService: EventsService) {}

    ngOnInit(): void {
      this.eventsService.getEvents().subscribe({
        next: (data) => this.events = data,
        error: (err) => console.error('No events', err)
      });
    }

    getEvents() {

      return ;
    }
}
