import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';

const baseUrl = environment.baseUrl;
interface Count {
  value: number;
}
@Injectable()
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  private initialCount: Count = { value: 0 };
  private countTracker = new BehaviorSubject<Count>(this.initialCount);

  getCount(): Observable<Count> {
    return this.countTracker.asObservable();
  }
  setCount(val: number, delta: number): void {
    this.countTracker.next({ value: val + delta });
  }

  getAll() {
    return this.http.get<any[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
