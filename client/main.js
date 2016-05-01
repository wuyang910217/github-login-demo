import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.demo.events({
  'click #github-login': function(event, instance) {
    event.preventDefault();
  }
});
