import { h, RemoteData } from '/js/src/index.js';
import {info, iconPerson, iconReload} from '/js/src/icons.js';

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
      model.homeModel.userName = 'Alice';
    }
  }, [
    h('i', iconPerson(), ' user'),
  ]),

  h('label', 'User name: ' + model.homeModel.userName),

  h('label', 'Greeting message: ' + model.homeModel.greetingMessage),

  model.homeModel._data.isLoading() ?
    h('div', [
      h('i', iconReload()),
      'Loading...'
    ]) : null,
];
