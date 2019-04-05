import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // These variables are getting the current
  // date and storing it into timestamp
  today = new Date();
  timestamp = '';

  // This variable is for the success message, so it's telling it to not appear.
  showMsg: boolean = false;
  
  constructor() { 
    // This is setting the format and date for the timestamp.
    this.timestamp = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+4151−08739');
  }

  ngOnInit() {
    // This is the script key from the Google Sheet. Do not change unless moving to another sheet and script.
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyc5YNVj19yQ7EufCt8OnpAtFdyooqmKnp_yV7Mt7tOD2Q5yfxe/exec'
    // This is the form in the html, so its just connecting the form and the google sheet.
    const form = document.forms['club-Tennis-Tryout-Form']

    // This is a listener that will output to the console that the submission was successful or not.
    // It also will make the success message appear, but it will always appear even if it fails...
    // TODO: Fix Success/Fail cases of this process
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        this.showMsg= true;
    })
  }  

}
