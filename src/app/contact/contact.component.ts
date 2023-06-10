import {
  Component,
  Renderer2, 
  ElementRef,
  NgModule,

  ViewChild,
} from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms'; 
import { PagesBehaviorService } from '../pages-behavior.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    public pagesBehaviorService: PagesBehaviorService,
    private renderer: Renderer2
  ) {}

  @ViewChild('myForm') myForm!: NgForm;

  name = { value: '', isFocused: false };
  email = { value: '', isFocused: false };
  message = { value: '', isFocused: false };
  formSubmitted = false;

  inputValue: string = '';
  isLoading: boolean = false;
  isSuccess: boolean = false;
  isError = false;

  onFocus(field: any): void {
    field.isFocused = true;
  }

  onBlur(field: any) {
    field.isFocused = false;
  }

  async sendMail() {
    try {
      console.log('send mail');
      console.log(this.name.value, this.email.value, this.message.value);
      this.formSubmitted = true;
      this.renderer.addClass(document.body, 'no-scroll');
      this.isLoading = true;

      let fd = new FormData();
      let combinedMessage = `Name: ${this.name.value}\nEmail: ${this.email.value}\nMessage: ${this.message.value}`;
      fd.append('name', this.name.value);
      fd.append('message', combinedMessage);
      await fetch(
        'https://carmen-birkle.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );

      // this.name.value = '';
      // this.email.value = '';
      // this.message.value = '';
      this.isSuccess = true;
      setTimeout(() => {
        this.isSuccess = false;
        this.resetForm();
      }, 3000);
    } catch (error) {
      console.error('Error sending mail:', error);
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
        this.resetForm();
      }, 3000);
    } finally {
      this.renderer.removeClass(document.body, 'no-scroll');
      this.isLoading = false;
    }
  }

  resetForm() {
    this.myForm.resetForm(); // Zurücksetzen des Angular-Formulars
    // this.name.value = ''; // Zurücksetzen des Namensfelds
    // this.email.value = ''; // Zurücksetzen des E-Mail-Felds
    // this.message.value = ''; // Zurücksetzen des Nachrichtenfelds
    this.formSubmitted = false; // Zurücksetzen des Formulars
    this.name = { value: '', isFocused: false }; // Zurücksetzen des Namensfelds
    this.email = { value: '', isFocused: false }; // Zurücksetzen des E-Mail-Felds
    this.message = { value: '', isFocused: false }; // Zurücksetzen des Nachrichtenfelds
   
  
  }  

}





