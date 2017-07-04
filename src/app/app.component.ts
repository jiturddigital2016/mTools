import { Component } from '@angular/core';

import { ApiService } from './shared';
//import { SidebarComponent } from './sidebar/sidebar.component';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  template: require('./app.component.html')
})
export class AppComponent {
  

  constructor(private api: ApiService) {
  }
}
