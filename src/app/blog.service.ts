import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.apiUrl);
  }

  getDetail(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  create(blog: Blog) {
    return this.http.post(this.apiUrl, blog);
  }

  update(id: number, blog: Blog) {
    return this.http.put(this.apiUrl + '/' + id, blog);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
