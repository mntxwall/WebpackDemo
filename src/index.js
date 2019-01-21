import printMe from './print.js';
var m = require("mithril");
var MyComponent = require("./mycomponent");
var UserList = require("./views/UserList");

/*
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());*/

m.mount(document.body, UserList);