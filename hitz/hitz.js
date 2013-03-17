
  Meteor.Router.add('/clear/', 'GET', function() { 
    Loadserver.remove({});
  });

  Meteor.Router.add('/server/:id', 'GET', function(id) { 
    Loadserver.insert({name: this.params.id});
  });

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
//      Loadserver.insert({name: getUrlVars()['param']});
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
