import { Template } from 'meteor/templating';
import { CubesCollection } from '../api/CubesCollection.js';

import './Cube.js';
import './App.html';
import { getColor, getCssColor, incrementColor, setColor } from './Color.js';

/*
Important notes

1) this Meteor project includes 2 special packages
- insecure: allows the client to write data (meaning that you don't need Meteor methods to write data to the database)
- autopublish: allows the client to access all server data without need of a publication/subscription

2) you only need to look at main.js and main.html files to understand the code.

3) your goal: suggest and implement a game or interactive feature using this base. 
   During the interview, we will review your implementation and may ask you to extend or modify it.
*/

if (Meteor.isClient) {

  Template.world.helpers({
    cubes() {   
      return CubesCollection.find().fetch();  
    }
  });

  Template.world.events({
    'mouseup #floor'(event) {
      console.log('mouseup on floor', event);

      if (event.button === 1){
        const p = { 
          x: Math.round(event.worldX) ,
          y: Math.round(event.worldY),
          z: 0
        };

        CubesCollection.insert({...p, color: getColor()});
      }
    },

    'keypress' (event){
      if (event.originalEvent.key === '1'){
        incrementColor();
      }
    },

    'click #blue'(event){
      setColor('blue');
      $("button").removeClass("selected");
      $("#blue").addClass("selected");
    },
    'click #red'(event){
      setColor('red');
      $("button").removeClass("selected");
      $("#red").addClass("selected");
    },
    'click #green'(event){
      setColor('green');
      $("button").removeClass("selected");
      $("#green").addClass("selected");
    }
  });

}

