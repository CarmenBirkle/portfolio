import { Component } from '@angular/core';
import { PagesBehaviorService } from '../pages-behavior.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  german = false;
  language = 'EN';
  flagPicture = 'assets/img/icons/german.png';

  constructor(public pagesBehaviorService: PagesBehaviorService, public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

toggleLanguage() {
  // if (this.german) {
  //   this.translate.use('en');
  //   this.german = false;
  //   this.flagPicture = 'assets/images/germany.png';
  // } else {
  //   this.translate.use('de');
  //   this.german = true;
  //   this.flagPicture = 'assets/images/usa.png';
  // }

  this.german = !this.german;
  this.translate.use(this.german ? 'de' : 'en');
  this.flagPicture = this.german ? 'assets/img/icons/english.png' : 'assets/img/icons/german.png';
  this.language = this.german ? 'EN' : 'DE';
}

}
