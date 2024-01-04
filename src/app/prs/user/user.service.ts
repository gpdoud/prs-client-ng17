import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);
  baseurl = "http://localhost:5555";

  constructor() { }

  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}/api/users`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/api/users/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}/api/users`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/api/users/${user.id}`, user) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/api/users/${id}`) as Observable<any>;
  }
}
