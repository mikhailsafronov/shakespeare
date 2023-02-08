import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private ApiUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  public getData = (): Observable<any> => this.http.get(this.ApiUrl);
}
