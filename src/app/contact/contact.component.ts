import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  showuserName: boolean = false;
  showuserAge: boolean = false;
  showuserEmail: boolean = false;
  showuserPass: boolean = false;
  showName() {
    this.showuserName = true;
  }
  hideName() {
    this.showuserName = false;
  }
  showAge() {
    this.showuserAge = true;
  }
  hideAge() {
    this.showuserAge = false;
  }
  showEmail() {
    this.showuserEmail = true;
  }
  hideEmail() {
    this.showuserEmail = false;
  }
  showPass() {
    this.showuserPass = true;
  }
  hidePass() {
    this.showuserPass = false;
  }
}
