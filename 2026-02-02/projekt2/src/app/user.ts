import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './Iuser';

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient)
  {

  }

  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.apiURL);
  }
}
