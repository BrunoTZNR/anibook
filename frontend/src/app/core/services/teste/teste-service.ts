import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) {}

  buscar() {
    return this.http.get(
      'http://localhost:8080/api/teste',
      { responseType: 'text' }
    );
  }
}
