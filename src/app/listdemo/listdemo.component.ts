import { Component, OnInit } from '@angular/core';

export class EventModel{
  id: number;
  name: string;
  pic?: string;


  constructor(id, name, pic = '') {
  // Object.assign(this, param)
    this.id = id;
    this.name = name;
    this.pic = pic;
   }
}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'https://pb2.jegy.hu/imgs/system-4/program/000/100/450/sziget-fesztival-2019-vasarnapi-napijegy-augusztus-11-474-279-125929.jpg'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'data:image/png;base64,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'
      },
      {
        id: 3,
        name: 'rockmaraton',
        pic: 'http://rockmaraton.hu/media/images/2018/rockmaraton-2018-og-hu.jpg'
      }
    ]
   }

// ebben az esetben azokra szűr rá, tehát nem töröl!, akinek nem egyezik az id-ja
  delete(id: number) {
    this.events = this.events.filter((ev : EventModel) => ev.id !== id);
  }

  add(newEventNameInput: HTMLInputElement){
    this.events = [...this.events, new EventModel(5, newEventNameInput.value)];
    newEventInput.value = '';
  }

  ngOnInit() {
  }

}
