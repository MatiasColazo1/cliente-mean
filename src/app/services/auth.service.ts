import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  signUp(user: User){
    return this.http.post<User>(this.URL + '/signup', user);
  }

  signIn(user: User){
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

interface User {
  email: string;
  password: string;
}
