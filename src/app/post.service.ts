import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  @Injectable({
    providedIn: 'root'
  })
   postsData = [
     
      {
        id: 1,
        title: 'Around the World',
        excerpt:'Discover the hidden gems of Pakistan....',
        text: 'Discover the hidden gems of Pakistan, a land of breathtaking landscapes and rich cultural heritage. From the majestic peaks of the Karakoram Range to the serene shores of the Arabian Sea, Pakistan offers a diverse tapestry of natural wonders waiting to be explored. Embark on a journey that takes you through bustling bazaars, ancient forts, and verdant valleys. Explore the vibrant city of Lahore, where history and modernity blend seamlessly, and savor the flavors of authentic Pakistani cuisine that will tantalize your taste buds. Venture into the enchanting Swat Valley, known as the Switzerland of Pakistan, where emerald green meadows and crystal-clear rivers create a picturesque haven. Trek along the trails of Fairy Meadows, where the Nanga Parbat stands tall, offering panoramic views that leave you in awe of natures grandeur. Pakistans rich history comes alive as you explore the ancient ruins of Mohenjo-daro, the majestic Badshahi Mosque, and the regal Lahore Fort. Immerse yourself in the local culture as you attend colorful festivals, witness traditional dance performances, and interact with hospitable locals who will welcome you with open arms.',
        author: 'Ali',
        likes:0,
        dislikes:0,
        categories: ['Travel'],
        tags: ['Tourist'],
        publication: 20-8-2023,
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 2,
        title: 'Web Development',
        excerpt: 'Welcome to the ever-evolving world of web development....',
        text: 'Welcome to the ever-evolving world of web development, where creativity meets technology to shape the digital landscape. As the backbone of the online universe, web development is a dynamic field that empowers businesses, individuals, and ideas to come to life on the internet. In the realm of front-end development, designers and developers collaborate to craft captivating user interfaces that seamlessly merge aesthetics with user experience. With HTML, CSS, and JavaScript as their tools, they transform visions into responsive websites that adapt to various devices, from mobile phones to large desktop screens. Meanwhile, the back-end wizards work their magic behind the scenes. Armed with programming languages like Python, Ruby, PHP, and Node.js, they build the engines that power websites, handling data, logic, and interactions that users might not even see. Databases, servers, and APIs become their playground as they create the functionality that turns websites into dynamic platforms.',
        author: 'Steve',
        likes:0,
        dislikes:0,
        categories: ['Web'],
        tags: ['Web'],
        publication: 20-8-2023,
        image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
      },
      {
        id: 3,
        title: 'The Baking Blog',
        excerpt:'Welcome to the world of delightful baking!....',
        text: 'Welcome to the world of delightful baking! Whether youre a seasoned pastry chef or just starting on your baking journey, this blog is your ultimate guide to creating mouthwatering treats. From fluffy cakes that melt in your mouth to golden-brown pastries that exude warmth, were here to share the art and science behind the perfect bake Join us as we explore the secrets of creating heavenly desserts that bring joy to every occasion.From classic chocolate chip cookies that take you back to your childhood to innovative macaron flavors that elevate your taste buds, our recipes are crafted with passion and precision. We will dive into essential baking techniques, tips for achieving that perfect rise, and the magic of flavor pairings that will leave you craving for more.Get ready to embark on a culinary adventure where buttery aromas fill the air, and the sound of your mixer becomes a symphony of creativity. Lets roll up our sleeves, dust the countertops with flour, and turn our ovens into portals of magic. Whether you are seeking a comforting slice of pie or an intricate cake masterpiece, our blog is here to inspire, educate, and satisfy your baking desires.',
        author: 'Fatima',
        likes:0,
        dislikes:0,
        categories: ['Food'],
        tags:  ['Cake'],
        publication: 20-8-2023,
        image: 'https://images.unsplash.com/photo-1597528662465-55ece5734101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
        
      }
    ];
    
    static postsData: any;
  
  
    constructor() { }
  
    getPosts(): Observable<any[]> {
      return of(PostService.postsData); 
    }
    getPostsData() {
      return this.postsData;
    }
    getPostById(id: number): any {
      const post = this.postsData.find(post => post.id === id);
      return post ? { ...post, comments: [] } : null;
    }
  }
  

