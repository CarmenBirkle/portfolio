import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PagesBehaviorService {
  german = false;
  language = 'EN';
  flagPicture = 'assets/img/icons/german.png';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

/**
 * Toggle language between english and german
 * change flag picture and the alt text
 */ 
  toggleLanguage() {
    this.german = !this.german;
    this.translate.use(this.german ? 'de' : 'en');
    this.flagPicture = this.german
      ? 'assets/img/icons/english.png'
      : 'assets/img/icons/german.png';
    this.language = this.german ? 'EN' : 'DE';
  }

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
