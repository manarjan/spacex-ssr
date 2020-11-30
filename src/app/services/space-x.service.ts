import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchFilter, SpaceXLaunch } from '../models/space-x.model';
import { filterParams } from '../utilities/functions';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  constructor(private http: HttpClient) {}

  getLaunches(filter: SearchFilter) {
    return this.http.get<SpaceXLaunch[]>(environment.api.launches, {
      params: filterParams(filter),
    });
  }
}
