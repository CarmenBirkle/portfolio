import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms'; //
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(public pagesBehaviorService: PagesBehaviorService) {}

  @ViewChild('myForm') myForm!: NgForm;

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

  sendMail() {
   
    console.log('send mail');
    console.log(this.name.value, this.email.value, this.message.value);

    this.name.value='';
    this.email.value='';
    this.message.value='';
  }
}
