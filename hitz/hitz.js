function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

Loadserver = new Meteor.Collection("loadserver");
if (Meteor.isClient) {
  Template.hello.greeting = function () {
    var servers = Loadserver.find({}).distinct('name', true).length;
    var teste = '';
    for (var i = 0; i < servers;i++ ){
      var servidor = Loadserver.find({}).distinct('name', true)[i].name;
      teste += servidor +" => "+ Loadserver.find({name: servidor}).count();
      if (i + 1 != servers)
        teste += " || ";
    }
    return teste;
  };

  Template.hello.events({
    'click input' : function () {
      Loadserver.insert({name: getUrlVars()['param']});
    }
  });

  Template.hello.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
         Loadserver.insert({name: getUrlVars()['param']});
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
