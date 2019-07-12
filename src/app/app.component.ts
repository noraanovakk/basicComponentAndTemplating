import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicComponentAndTemplating';
  events = ['sziget', 'efott', 'fezen', 'szin', 'pen'];
  show = true;
  klikkeljukbe = false;
  inputContent = 'valami, meg valami, haha';

  toggle(){
    this.show = !this.show;
  }

  demo(ev: Event){
    console.log(ev)
  }
}
