import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OWNER_NAME, REPO } from '../components/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  public getDetails(): Observable<any> {
    const url = `https://api.github.com/repos/${OWNER_NAME}/${REPO}/commits`;
    return this.http.get(url);
  }
}
