import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  myPost: Post = {
    title: '',
    body: ''
  }

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll().subscribe((res: Post[]) => {
      this.posts = res;
    })
  }

  savePost() {
    this.postService.persistPost(this.myPost).subscribe((res: Post) => {


      this.posts = [this.myPost, ...this.posts]
      this.myPost = {
        title: '',
        body: ''
      }

    })

  }
  destroyPost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id)
    })
  }

}
