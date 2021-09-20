import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private server = 'http://localhost:9078';
  constructor(private http: HttpClient) { }

  upload(fileData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload`, fileData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  download(file: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/file/download/${file}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }
}
