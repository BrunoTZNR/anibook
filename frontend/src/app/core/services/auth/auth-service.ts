import { Injectable }
from '@angular/core';

import { HttpClient }
from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api =
    'http://localhost:8080/auth';

  constructor(
    private http: HttpClient
  ) {}

  login(
    login: string,
    senha: string
  ) {

    return this.http.post(
      `${this.api}/login`,
      {
        login,
        senha
      }
    );
  }

  logout() {

    localStorage.removeItem(
      'token'
    );
  }
}