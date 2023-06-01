import { Component } from '@angular/core';
import { PagesBehaviorService } from '../pages-behavior.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  german = false;
  language = 'EN';
  flagPicture = 'assets/img/icons/german.png';

constructor(public pagesBehaviorService: PagesBehaviorService,) {}
}


