import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-pill',
  standalone: true,
  imports: [],
  templateUrl: './skill-pill.component.html',
  styleUrl: './skill-pill.component.scss'
})
export class SkillPillComponent {
  @Input() skill: string = '';
}
