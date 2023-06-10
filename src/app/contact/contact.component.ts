import {
  Component,
  Renderer2, 
  ViewChild,
} from '@angular/core';

import { NgForm, NgModel} from '@angular/forms'; 
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
  @ViewChild('nameField') nameField!: NgModel;
  @ViewChild('emailField') emailField!: NgModel;
  @ViewChild('messageField') messageField!: NgModel;

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

  /**
   * Sends the mail by handling form submission, preparing data, making the sending call,
   * and handling success and error scenarios.
   *
   * @returns {Promise<void>} A promise that resolves once the mail is sent.
   */

  async sendMail() {
    try {
      this.handleSubmit();
      let fd = this.prepareData();
      await fetch(
        'https://carmen-birkle.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );
      this.handleSuccessMessage();
    } catch (error) {
      this.handleErrorMessage();
    } finally {
      this.closeSubmit();
    }
  }

  /**
   * Handles the submission of the form by setting the formSubmitted flag to true,
   * adding a CSS class to the document body to disable scrolling, and displaying a loading spinner.
   */
  handleSubmit() {
    this.formSubmitted = true;
    this.renderer.addClass(document.body, 'no-scroll');
    this.isLoading = true;
  }

  /**
   * Prepares the form data by creating a new FormData object and appending the name, email, and message values.
   * Returns the FormData object.
   * @returns {FormData} The prepared form data.
   */
  prepareData() {
    let fd = new FormData();
    let combinedMessage = `Name: ${this.name.value}\nEmail: ${this.email.value}\nMessage: ${this.message.value}`;
    fd.append('name', this.name.value);
    fd.append('message', combinedMessage);
    return fd;
  }

  /**
   * Handles the success message display by setting the isSuccess flag to true and scheduling a timeout to reset the form and hide the success message after a certain duration.
   */
  handleSuccessMessage() {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
      this.resetForm();
    }, 3000);
  }

  /**
   * Handles the error message display by setting the isError flag to true and scheduling a timeout to reset the form and hide the error message after a certain duration.
   */
  handleErrorMessage() {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
      this.resetForm();
    }, 3000);
  }

  /**
   * Resets the form and clears the form fields.
   * Mark individual form fields as untuched
   */
  resetForm() {
    this.myForm.resetForm();
    this.nameField.control.markAsUntouched();
    this.emailField.control.markAsUntouched();
    this.messageField.control.markAsUntouched();

    this.formSubmitted = false;
    this.name = { value: '', isFocused: false };
    this.email = { value: '', isFocused: false };
    this.message = { value: '', isFocused: false };
  }

  closeSubmit() {
    this.renderer.removeClass(document.body, 'no-scroll');
    this.isLoading = false;
  }
}





