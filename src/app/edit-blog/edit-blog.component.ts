import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  blog: Blog = {
    title: '',
    body: '',
    userId: 0
  };

  blogId: number;

  constructor(

    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.blogId = params.id;

      this.blogService.getDetail(this.blogId).subscribe(blog => {
        this.blog = blog;
      });
    });
  }

  updateBlog() {
    this.blogService.update(this.blogId, this.blog).subscribe(blog => {
      alert('Cập nhật thành công ! ID ' + blog.id);
      this.router.navigate(['/']);
    },

      error => {
        alert('Chưa cập nhật được!');
      }
    );
  }

}
