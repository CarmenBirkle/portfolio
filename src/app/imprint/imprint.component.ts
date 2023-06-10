import { Component } from '@angular/core';
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  constructor(public pagesBehaviorService: PagesBehaviorService) {}
}
