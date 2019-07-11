import {Component} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  title = "sziasztok";

  constructor(){
    console.log(`${this.title} itt lehet folytatni folyó szöveggel, amit ki szeretnék írni`);
    this.greetings();
  }

  greetings(){
    console.log('not implemented yet');
  }
}
