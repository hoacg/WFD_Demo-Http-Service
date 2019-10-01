import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blog: Blog = {
    title: '',
    body: '',
    userId: 0
  };

  constructor(

    private blogService: BlogService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  createBlog() {
    this.blogService.create(this.blog).subscribe( blog => {
      alert('Thêm thành công !' + blog.id);
      this.router.navigate(['/']);
    },

    error => {
      alert('Chưa thêm được!');
    }
    );
  }

}
