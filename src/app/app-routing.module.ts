import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListBlogComponent },
  { path: ':id', component: DetailBlogComponent },
  { path: 'edit/:id', component: EditBlogComponent },
  { path: 'create', component: CreateBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
