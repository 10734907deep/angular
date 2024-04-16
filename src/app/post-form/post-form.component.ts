import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/post-form/post.service.ts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  constructor(private postService: PostService) { }

  onSubmit(form: NgForm): void {
    const post = form.value;
    this.postService.createPost(post).subscribe(() => {
      // Post created successfully, perform any additional actions if needed
      form.reset();
    }
  }
}