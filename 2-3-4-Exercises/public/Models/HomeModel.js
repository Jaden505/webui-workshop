import { Observable } from '/js/src/index.js';

export default class HomeModel extends Observable {
  constructor() {
    super();
    this.userName = 'Guest';
  }

  getUserName() {
    return this.userName;
  }

  setUserName(name) {
    this.userName = name;
    this.notify();
  }

  async retrieveInformation(name) {
    const response = await fetch(`/api/information/${name}`);
    if (response.ok) {
      const data = await response.json();
      this.details = data;
      this.notify();
    } else {
      console.error('Failed to retrieve information');
    }
  }
}
