import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Blog {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  mediumUrl: string;
  githubUrl: string;
  isLatest?: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  blogs: Blog[] = [
    {
      title: 'Typewriter Animation in Angular 17',
      description: 'Typewriter effect using Angular and RxJS',
      techStack: '#Angular17 #Rxjs',
      imageUrl: 'assets/Blogs/Typewriter.png',
      mediumUrl: 'https://medium.com/@nikolovlyudmill/typewriter-animation-in-angular-17-f1c503058d41',
      githubUrl: 'https://github.com/LyudmilNikolov/Typewriter-Angular',
      isLatest: true,
    }
  ];

  trackByFn(index: number): number {
    return index;
  }
}