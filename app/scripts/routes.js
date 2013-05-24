Gaurko.Router.map(function(){
  this.resource('items', function (){
    this.route('item', { path: ':item'})
    this.route('new')
  })
})

Gaurko.ApplicationRoute = Em.Route.extend({
  redirect: function (){
    return this.transitionTo('items.new')
  }
})

