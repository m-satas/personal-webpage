import { Component, Input } from '@angular/core';
import { SkillPillComponent } from "../skill-pill/skill-pill.component";
import { CommonModule } from '@angular/common';

export class Workplace {
  company: string = '';
  website: string = '';
  years: string[] = [];
  title: string = '';
  description: string = '';
  skills: string[] = [];
}

@Component({
    selector: 'app-workplace-card',
    standalone: true,
    templateUrl: './workplace-card.component.html',
    styleUrl: './workplace-card.component.scss',
    imports: [CommonModule, SkillPillComponent]
})
export class WorkplaceCardComponent {

  @Input() workplace: Workplace = new Workplace;
}
