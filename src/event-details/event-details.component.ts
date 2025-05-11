import { ChangeDetectorRef, Component, Input, OnInit, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { EventsService } from '../events.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import * as L from 'leaflet';

@Component({
  selector: 'event-details',
  imports: [CommonModule, CardModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit, AfterViewInit {
  @Input() event: any;
  eventDetails: any;
  options: any;
  data: any;
  details: any;
  platformId = inject(PLATFORM_ID);
  constructor(
    private eventsService: EventsService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    // this.initChart();
    console.log('NARAZIE NIC')
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.eventDetails = this.eventsService.getEventDetailsById(this.event.id).subscribe({
      next: (data) => this.eventDetails = data,
      error: (err) => console.error('No event', err)
    });
  }

  ngAfterViewInit(): void {
    const map = L.map('map').setView([52.2297, 21.0122], 13); // Warszawa (mockowana lokalizacja)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([52.2297, 21.0122])
      .addTo(map)
      .bindPopup('Mockowane zdarzenie w Warszawie')
      .openPopup();
  }

  sendRequest() {
    this.eventsService.sendEmptyPost(this.event.id);
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--p-text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
        this.cd.markForCheck()
    }
}
}
