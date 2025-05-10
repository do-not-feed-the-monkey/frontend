import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Przykładowy interfejs (typ obiektu, który spodziewasz się otrzymać)
export interface Events {
  id: number;
  name: string;
  timeCreation: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'https://api.example.com/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }

  getEventDetailsById(id: number): Observable<Events> {
    return this.http.get<Events>(`${this.apiUrl}/${id}`);
  }
}
