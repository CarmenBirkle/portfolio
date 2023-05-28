import { Component } from '@angular/core';
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  constructor(public pagesBehaviorService: PagesBehaviorService) {}

  isMenuOpen = false;

  toggleMenu() {
    console.log(this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
      console.log(this.isMenuOpen);
  }
}
