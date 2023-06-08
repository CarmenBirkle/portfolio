import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(public pagesBehaviorService: PagesBehaviorService) {}

  name = { value: '', isFocused: false };
  email = { value: '', isFocused: false };
  message = { value: '', isFocused: false };

  inputValue: string = '';

  onFocus(field: any) {
    field.isFocused = true;
  }

  onBlur(field: any) {
    field.isFocused = false;
  }
}

