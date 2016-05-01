import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.userInfo.helpers({
  user() {
    if (Meteor.user()) {
      return Meteor.users.findOne();
    }
  },
});

Template.demo.events({
  'click #login': function(event) {
    Meteor.loginWithGithub(function(err) {
     if (err)
         console.log(err.reason);
 });
 },
 'click #logout': function(event) {
  event.preventDefault();
  Meteor.logout();
 }
});
