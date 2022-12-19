import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})



export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  

  createMeeting() {
    return this.http.post(`${this.baseUrl}/meetings`, { title: 'Sample App Meeting'} );
  }

  addParticipant(meetingId: string){

  }
}
