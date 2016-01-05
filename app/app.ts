import {Component} from 'angular2/core'
import {TodoComponent} from './todo'
@Component({
  selector: 'todoApp',
  template: `
  <md-content>
  <todo></todo>
  </md-content>`,
  directives: [TodoComponent]
})
export class AppComponent { }