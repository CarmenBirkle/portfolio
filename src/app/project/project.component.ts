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
    const description = project.description.find(
      (desc: any) => desc.lang === lang
    );
    return description ? description.value : '';
  }
   projects = projectData;
}
