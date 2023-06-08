import { Component, OnInit } from '@angular/core';
import { projectData } from '../projektData'; 
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  constructor(private pagesBehaviorService: PagesBehaviorService) {}

  ngOnInit() {}

  getDescriptionByLang(project: any): string {
    const lang = this.pagesBehaviorService.german ? 'de' : 'en';
    console.log(lang);
    const description = project.description.find(
      (desc: any) => desc.lang === lang
    );
    return description ? description.value : '';
  }
   projects = projectData;

  // isHovered: boolean[] = new Array(projectData.length).fill(false);

  // onMouseEnter(index: number) {
  //   this.isHovered[index] = true;
  // }

  // onMouseLeave(index: number) {
  //   this.isHovered[index] = false;
  // }
}
