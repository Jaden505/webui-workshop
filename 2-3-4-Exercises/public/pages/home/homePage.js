import { h } from '/js/src/index.js';
import {info, iconPerson} from '/js/src/icons.js';

export default (model) => [
  h('h1', 'Home page'),
  h('p', 'This is the home page.'),

  h('button.btn', {
    title: 'About',
    onclick: () => {
      console.log('Button clicked: About');
      model.router.go('?page=about');
    }
  }, [
    h('i', info(), ' about'),
  ]),

  h('button.btn', {
    onclick: () => {
      model.homeModel.setUserName('admin');
    }
  }, [
    h('i', iconPerson(), ' user'),
  ]),

  h('label', 'User name: ' + model.homeModel.getUserName())
];