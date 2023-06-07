import { Component } from '@angular/core';
import { projectData } from '../projektData';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = projectData;

  isHovered: boolean[] = new Array(projectData.length).fill(false);

  onMouseEnter(index: number) {
    this.isHovered[index] = true;
  }

  onMouseLeave(index: number) {
    this.isHovered[index] = false;
  }
}
