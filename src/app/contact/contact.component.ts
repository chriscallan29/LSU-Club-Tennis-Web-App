import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  today = new Date();
  timestamp = '';
  showMsg: boolean = false;
  
  constructor() { 
    this.timestamp = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+4151−08739');
  }

  ngOnInit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyc5YNVj19yQ7EufCt8OnpAtFdyooqmKnp_yV7Mt7tOD2Q5yfxe/exec'
    const form = document.forms['club-Tennis-Tryout-Form']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        this.showMsg= true;
    })
  }  

}
