import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  isPrivate?: boolean;
  isLatest?: boolean;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Telco Monitoring Apps',
      description: 'Networking Virtualization solutions using Angular built to scale.',
      techStack: '#Angular16+ #Rxjs #Material #Sass #Echarts #Vis #Python #Kubernetes #Docker #KubeVirt',
      imageUrl: 'assets/Projects/ProjectTelco.png',
      githubUrl: 'https://www.telco.com/',
      liveUrl: 'https://www.telco.com/',
      isPrivate: true
    },
    {
      title: 'Crypto News',
      description: 'Get the latest Crypto News from trusted sources and live crypto market tracker.',
      techStack: '#React #Redux #Antd #Chartjs #Axios',
      imageUrl: 'assets/Projects/ProjectCryptoNews.png',
      githubUrl: 'https://github.com/LyudmilNikolov/Crypto-News',
      liveUrl: 'https://lyudmilnikolov.github.io/Crypto-News/',
      isLatest: true
    },
    {
      title: 'Netflix Clone',
      description: 'Clone of the most popular streaming app Netflix with google auth',
      techStack: '#Angular #Rxjs #Swiper #Tailwind #Auth',
      imageUrl: 'assets/Projects/ProjectNetflix.png',
      githubUrl: 'https://github.com/LyudmilNikolov/netflix-clone-angular',
      liveUrl: 'https://lyudmilnikolov.github.io/netflix-clone-angular/#/',
    },
    {
      title: 'Ecom Store',
      description: 'Ecommerce store for the latest products available',
      techStack: '#Angular #Rxjs #Tailwind #Material',
      imageUrl: 'assets/Projects/ProjectEcom.png',
      githubUrl: 'https://github.com/LyudmilNikolov/EcomStore',
      liveUrl: 'https://',
    },
    {
      title: 'Treasure Vault Mini Game',
      description: '2D Treasure Vault Mini Game. Try to crack the code under a minute.',
      techStack: '#PIXI.js #GSAP',
      imageUrl: 'assets/Projects/ProjectVault.png',
      githubUrl: 'https://github.com/LyudmilNikolov/Treasure-Vault-Mini-Game',
      liveUrl: 'https://lyudmilnikolov.github.io/Treasure-Vault-Mini-Game/',
    },
    {
      title: 'Wordle Clone',
      description: 'Clone of one of the most popular word guessing game.',
      techStack: '#React',
      imageUrl: 'assets/Projects/ProjectWordle.png',
      githubUrl: 'https://github.com/LyudmilNikolov/wordle-clone',
      liveUrl: 'https://lyudmilnikolov.github.io/wordle-clone/',
    },
  ];

  trackByFn(index: number): number {
    return index;
  }

  showGithubLink(project: Project): boolean {
    return Boolean(project.githubUrl) && !project.isPrivate;
  }
}
