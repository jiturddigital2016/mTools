import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  template: require('./layout.component.html')
})

export class LayoutComponent implements OnInit {

  

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello');
   
  }
 

}
