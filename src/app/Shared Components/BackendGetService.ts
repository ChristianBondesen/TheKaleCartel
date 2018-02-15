import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export abstract class BackendGetService<T> {
  public abstract url: string;
  constructor(private http: HttpClient) { }

  public GetAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }
  public GetOne(id: number): Observable<T> {
    return this.http.get<T>(this.url + id);
  }
  public GetByName(name: string): Observable<T> {
    return this.http.get<T>(this.url + name);
  }
  public PostNew(toPost: T): Observable<T> {
    return this.http.post<T>(this.url, toPost);
  }
}
