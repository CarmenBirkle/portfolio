import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagesBehaviorService {
  constructor() {}
  /**
   * Scroll to top, will be used on logo and button up
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }
}
