import { Component, Renderer2 } from '@angular/core';
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  constructor(
    public pagesBehaviorService: PagesBehaviorService,
    private renderer: Renderer2
  ) {}

  isMenuOpen = false;

  /**
   * Toggles the menu state between open and closed. Updates the isMenuOpen flag and adds or removes the 'no-scroll' class from the document body accordingly.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen
      ? this.renderer.addClass(document.body, 'no-scroll')
      : this.renderer.removeClass(document.body, 'no-scroll');
  }
}
