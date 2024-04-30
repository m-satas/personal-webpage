import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillPillComponent } from '../skill-pill/skill-pill.component';

export class Project {
  title: string = '';
  website: string = '';
  description: string = '';
  images: {
    src: string;
    alt: string;
  }[] = [];
  skills: string[] = [];
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, SkillPillComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: Project = new Project;
}
