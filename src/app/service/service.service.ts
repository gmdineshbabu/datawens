import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getList() {
    const url = './assets/data/data.json';
    return this.http.get(url);

  }
}
