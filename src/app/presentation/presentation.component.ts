import { Component } from '@angular/core';
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  constructor(private pagesBehaviorService: PagesBehaviorService) {}

  get language(): string {
    return this.pagesBehaviorService.language;
  }
  get shouldAddGermanClass(): boolean {
    return this.language !== 'DE' && this.pagesBehaviorService.german;
  }
}
