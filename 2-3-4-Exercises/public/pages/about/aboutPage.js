import { h } from '/js/src/index.js';
import {iconHome, info} from '/js/src/icons.js';

// About page
export default () => [
  h('h1', 'About page'),
  
  h('p', 'This is the about page.'),

  h('button.btn', { title: 'Home', onclick: () => {
    console.log('Button clicked: Home')
    model.router.go('?page=home')
  } }, [
    h('i', iconHome(), ' home')
  ]),

  h('button.btn', { onclick: () => console.log('Button clicked: Request data') }, [
    h('i', info(), ' user')
  ])

  
];
