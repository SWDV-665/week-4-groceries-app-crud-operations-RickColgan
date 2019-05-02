import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  myname = "Rick Colgan"
  myemail = "rickcolgan@example.com"
  myphone = "(402) 555-1212"

}
