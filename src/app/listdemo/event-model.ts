export class EventModel{
  id: number;
  name: string;
 // pic?: string;
  // ezzel meg lett adva, hogy a pic megadása opcionális
  pic: string;

  constructor(name, id = 0, pic = '') {
// constructor(id, name, pic = '') {
// Object.assign(this, param)
// constructor(param: EventModel) -->
// ezzel meg lett mondva, hogy várja el az összes paramétert
    this.id = id;
    this.name = name;
    this.pic = pic;
   }
}
