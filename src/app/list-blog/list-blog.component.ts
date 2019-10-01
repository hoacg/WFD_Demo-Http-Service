import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log('Gọi ngOnInit()');
    this.getList();
  }

  getList() {
    this.blogService.getList().subscribe( blogs => {
      this.blogs = blogs;
    });
  }

  deleteBlog(id: number) {
    this.blogService.delete(id).subscribe( success => {
      alert('Đã xóa thành công id ' + id);
      this.blogs = this.blogs.filter((blog, index) => this.blogs[index].id !== id);
    },

    error => {
      alert('Lỗi');
    }
    ,

    () => {
      // luon goi ham nay;
    }

    );
  }

}
