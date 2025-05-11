import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Events {
  id?: number;
  name?: string;
  timeCreation?: string;
  items: any[];
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
// 134.199.189.23/api/events
  // private apiUrl = 'https://api.example.com/events';
  private apiUrl = 'http://134.199.189.23/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any>{// Events[]> {
    return this.http.get<Events[]>('http://134.199.189.23/api/events');
  }

  getEventDetailsById(id: number): Observable<Events> {
    return this.http.get<Events>(`http://134.199.189.23/api/events/${id}`);
  }

  sendEmptyPost(id: number, event: any) {
    return this.http.patch<Events>(`http://134.199.189.23/api/events/${id}/ack`, {
      description: event.description
    });
  }
}
