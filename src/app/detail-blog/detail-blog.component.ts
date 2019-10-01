import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {

  blogId: number;
  blog: Blog;

  constructor(

    private blogService: BlogService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.blogId = params.id;

      this.blogService.getDetail(this.blogId).subscribe( blog => {
        this.blog = blog;
      });
    });
  }

}
