import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Piatto {
  id?: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private apiUrl = 'http://localhost:8080/piatti';

  constructor(private http: HttpClient) {}

  getPiatti(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.apiUrl);
  }

  addPiatto(piatto: Piatto): Observable<Piatto> {
    return this.http.post<Piatto>(this.apiUrl, piatto);
  }

  removePiatto(index: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${index}`);
  }
}
