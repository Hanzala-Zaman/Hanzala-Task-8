import { Component } from '@angular/core';
import { PostService } from '../post.service';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  categories: string[];
  tags: string[];
  image?: string;
}
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  postsData: Post[] = [];
  filteredPosts: Post[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  

  constructor(private postService: PostService) { }

  ngOnInit(): void 
  
  {
    this.postsData = this.postService.getPostsData();
    this.categories = this.getUniqueCategories(this.postsData);
    this.filterPosts();
  }
  getUniqueCategories(posts: any[]): string[] {
    const allCategories = posts.flatMap(post => post.categories);
    return [...new Set(allCategories)];
  }
  
  filterPosts() {
    this.filteredPosts = this.postsData.filter(post =>
      (this.selectedCategory === '' || post.categories.includes(this.selectedCategory))
    );
  }

}
