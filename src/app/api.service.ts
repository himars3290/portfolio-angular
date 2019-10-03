import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  projects: any;

  constructor(private _http: Http) {
  }

  getProjects() {
    return this._http.get('public/projects.json')
      .pipe(
        map(res => res.json())
      );
  }

  getProject(id) {
    return this._http.get('public/projects.json')
      .pipe(
        map(res => {
          return res.json()[id - 1];
        })
      );
  }
}
