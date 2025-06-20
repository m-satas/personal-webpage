import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Workplace, WorkplaceCardComponent } from './components/workplace-card/workplace-card.component';
import { CommonModule } from '@angular/common';
import { Project, ProjectComponent } from './components/project/project.component';
import { SkillPillComponent } from "./components/skill-pill/skill-pill.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, WorkplaceCardComponent, ProjectComponent, SkillPillComponent]
})
export class AppComponent {

  public workplaces: Workplace[] = [
    {
      company: 'twoday',
      website: 'https://www.twoday.lt/',
      years: ['2024', '2025'],
      title: 'Full-Stack Web Developer',
      description: 'Devoloping and maintaining features on twoday’s casehandling system for private and public sector clients.',
      skills: ['HTML', 'SCSS', 'JavaScript', 'Typescript', 'Angular', 'Java', 'Spring', 'MariaDB', 'Liferay']
    },
    {
      company: 'Avilda',
      website: 'https://www.avilda.eu/',
      years: ['2022', '2024'],
      title: 'Full-Stack Web Developer',
      description: 'Developing Avilda’s own warehouse management system product using Angular and Node.js.',
      skills: ['HTML', 'SCSS', 'JavaScript', 'Typescript', 'Angular', 'Angular Material', 'Node.js', 'Express', 'MySQL']
    },
    {
      company: 'TGW Lithuania',
      website: 'https://www.tgw-group.com/en/career/work-tgw/locations/lithuania',
      years: ['2022', '2022'],
      title: 'Simulation Engineer',
      description: 'Simulation development for fully automated warehouses using .NET (C#)',
      skills: ['C#', '.NET', 'MySQL', 'PowerBI', 'Grafana']
    },
    {
      company: 'Kaunas University of Technology',
      website: 'https://ktu.edu/',
      years: ['2019', '2022'],
      title: 'IT Project Coordinator',
      description: 'Organizations web site development and monitoring project coordinator. Analysis, preparation of future development plans, task management.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Google Analytics', 'Google Data Studio']
    },
    {
      company: 'Kaunas University of Technology',
      website: 'https://ktu.edu/',
      years: ['2017', '2022'],
      title: 'Data Analyst',
      description: 'Data gathering, analysis and submission to outside organizations. Automatization of data management and analysis. Work with Power BI, Google Analytics and Google Data Studio.',
      skills: ['MS Excel', 'Visual Basic for Applications', 'Python', 'PowerBI', 'Google Analytics', 'Google Data Studio']
    },
    {
      company: 'Transcom',
      website: 'https://transcom.com/lt/',
      years: ['2014', '2017'],
      title: 'Customer Sales Rep',
      description: 'Communicating with customers in English. Responding promptly to customer inquiries and resolving issues on the spot.',
      skills: ['Patience']
    },
  ]
  public projects: Project[] = [
    {
      title: 'Pigs',
      website: 'https://satas.me/pigs',
      description: `"Pigs" is a self-built online multiplayer card game, crafted 
      entirely by me and hosted right from my own home. Built with responsive design as a priority to
      ensure a smooth experience both on a mobile screen and desktop. It's also a PWA so it can be
      "installed" on any device too. Click to check out live version!`,
      images: [
        {
          src: './assets/pigs-1.jpg',
          alt: 'Pigs fullscreen'
        },
        {
          src: './assets/pigs-2.jpg',
          alt: 'Pigs card snapshot'
        },
        {
          src: './assets/pigs-3.jpg',
          alt: 'Pigs player snapshot'
        },
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', 'PWA', 'Node.js', 'Express', 'Socket.io', 'Nginx']
    }
  ]
  public skills: string[] = ['HTML', 'SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', '.NET', 'C#', 'Spring', 'Java', 'Liferay', 'Node.js', 'Express', 'MySQL', 'Photoshop'];

  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.updateBackgroundPosition();
  }

  updateBackgroundPosition() {
    const backgroundContainer = document.querySelector('.pointer-effect') as HTMLElement;
    backgroundContainer.style.background = `radial-gradient(900px at ${this.mouseX}px ${this.mouseY}px, rgba(206, 103, 253, 0.12), transparent 100%)`;
  }


}
