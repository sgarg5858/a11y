import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'posts',
      component:PostsComponent
    }])
  ]
})
export class PostModule { }
