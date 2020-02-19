import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  display: boolean = false;

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


      this.posts = [res, ...this.posts]
      this.myPost = {
        title: '',
        body: ''
      }

    })


  }
  destroyPost(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.postService.deletePost(id).subscribe(() => {
          this.posts = this.posts.filter((post) => post.id !== id)

          Swal.fire({
            title: 'Deleted!',
            text: 'Your imaginary file has been deleted.',
            icon: 'success',
            timer: 5000
          })

        })

      }
    })
  }
  toggleForm() {
    this.display = !this.display;
  }
  info(ngModel) {
    console.log(ngModel);

  }

}
