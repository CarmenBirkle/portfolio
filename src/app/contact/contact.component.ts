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
  formSubmitted = false;

  inputValue: string = '';



  onFocus(field: any): void {
    field.isFocused = true;
  }

  onBlur(field: any) {
    field.isFocused = false;
  }

  async sendMail() {
    console.log('send mail');
    console.log(this.name.value, this.email.value, this.message.value);
    this.formSubmitted = true;
    // userfeedback und dann leeren und wieder auf false setzen ggf. mit timeout
    //ladeanimation
      let fd = new FormData();
      let combinedMessage = `Name: ${this.name.value}\nEmail: ${this.email.value}\nMessage: ${this.message.value}`;
      fd.append('name', this.name.value);
      fd.append('message', combinedMessage);
    await fetch(
      'https://carmen-birkle.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    this.name.value = '';
    this.email.value = '';
    this.message.value = '';
  }
}
