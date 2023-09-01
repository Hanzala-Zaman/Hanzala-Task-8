import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: any = { comments: [] };
  newCommentInput: string = '';

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      this.post = this.postService.getPostById(postId);
    });
  }

  addComment() {
    if (this.newCommentInput.trim() !== '') {
      this.post.comments.push({ text: this.newCommentInput });
      this.newCommentInput = ''; 
    }
  }

  likePost() {
    this.post.likes++;
  }

  dislikePost() {
    this.post.dislikes++;
  }
}