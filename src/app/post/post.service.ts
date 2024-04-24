import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { BehaviorSubject, delay, map, pipe } from 'rxjs';

export interface PostState{
  isLoading:boolean;
  posts:Post[];
  error:string|undefined;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient
  ) { }

  private postsBehaviorSubject = new BehaviorSubject<PostState>({isLoading:false,posts:[],error:undefined});
  isLoadingPosts$ = this.postsBehaviorSubject.asObservable().pipe(
    map((postState:PostState)=>postState.isLoading)
  );
  posts$ = this.postsBehaviorSubject.asObservable().pipe(
    map((postState:PostState)=>postState.posts)
  )
  error$ = this.postsBehaviorSubject.asObservable().pipe(
    map((postState:PostState)=>postState.error)
  )


  getAllPosts()
  {
    this.postsBehaviorSubject.next({
      isLoading:true,posts:[],error:""
    })

    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(delay(2000)).subscribe({
      next:(posts)=>{
        this.postsBehaviorSubject.next({
          isLoading:false,posts,error:""
        })
      },
      error:()=>{
        this.postsBehaviorSubject.next({
          isLoading:false,posts:[],error:"Couldn't load posts!"
        })
      }
    })
  }
}
