App.Router.map(function(){
  this.resource('incomes')
  this.resource('outcomes')
  this.resource('all')
  this.resource('item')
});

// App.IndexRoute = Em.Route.extend({
//   redirect: function(){
//     this.transitionTo('items');
//   }
// });

// App.ItemsRoute = Ember.Route.extend({
//   model: function() {
//     return App.data;
//   }
// });

// App.ItemRoute = Ember.Route.extend({
//   model: function(id) {
//     return App.data[id.item_id - 1];
//   }
// });
