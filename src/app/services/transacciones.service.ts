import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getTransacciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/transaccion`);
  }
}
