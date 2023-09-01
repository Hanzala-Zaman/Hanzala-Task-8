import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { FormsModule } from '@angular/forms';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'post/:id', component: PostDetailComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
