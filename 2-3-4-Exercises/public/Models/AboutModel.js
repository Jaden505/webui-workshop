import { Observable } from '/js/src/index.js';

export default class AboutModel extends Observable {
  constructor() {
    super();
    this.details = {};
    this.requestedTimes = 0;
  }

  getDetails() {
    this.details = {
      name: 'About Page',
      description: 'This is the about page.',
    };
    this.requestedTimes++;
    this.notify();
  }
}
