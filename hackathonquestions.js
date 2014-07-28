if (Meteor.isClient) {
  /*Template.hello.greeting = function () {
    return "Welcome to hackathonquestions.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });*/

  /* Active tabs http://www2.epa.gov/webguide/javascript-page-tabs */
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

/* this section should actually be server code */

/*
// Questions -- {name: String,
//               question: String,
//               tags: [String, ...],
//               timestamp: Number}
Questions = new Meteor.Collection("questions");

// Publish complete set of lists to all clients.
Meteor.publish('questions', function () {
  return Lists.find();
});
*/