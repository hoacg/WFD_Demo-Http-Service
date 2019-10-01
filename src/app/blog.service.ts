import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  public getDetail(id: number): Observable<Blog> {
    return this.http.get<Blog>(this.apiUrl + '/' + id);
  }

  create(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, blog);
  }

  update(id: number, blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(this.apiUrl + '/' + id, blog);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
