import { Component, Input } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  @Input() projects: ProjectComponent[];

  constructor() {
    this.projects = [];
  }
}
