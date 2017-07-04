import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
     console.log('Hello About');
      // This prints "Max" since arrow functions bind to our current "this" context.
  }
  
  ngOnInit() {
    console.log('Hello About');
  }

}
