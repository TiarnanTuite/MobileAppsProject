import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  GetMemberData(): Observable<any>{
   return this.http.get('https://www.jsonblob.com/api/jsonblob/970644108746178560')
  }
}
