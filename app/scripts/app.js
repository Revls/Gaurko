var App = Em.Application.create({
  meta: Em.Object.create({
    $token: Em.$('[name="ttoken"]'),
    $user: Em.$('[name="tuser"]'),
    $name: Em.$('[name="tname"]'),
    $img: Em.$('[name="timg"]')
  }),
  data: []
});

// wait until data is loaded
// App.deferReadiness()

App.auth = {
  init: function(controller) {
    if (App.meta.$token.attr('content') && App.meta.$user.attr('content')) {
      controller.set('currentUser', Em.Object.create({
        token: App.meta.$token.attr('content'),
        username: App.meta.$user.attr('content'),
        name: App.meta.$name.attr('content'),
        img: App.meta.$img.attr('content')
      }))
      controller.set('authorized', true)
    } else {
      controller.set('authorized', false)
    }
  }
}

App.ApplicationController = Ember.Controller.extend({
  authorized: null,
  currentUser: null,
  authorizing: function() {
    return this.get('authorized') === null;
  }.property('authorized'),
  init: function() {
    this._super()
    App.auth.init(this)
  }
})
// App.Item = Ember.Object.extend({
//   id: null,
//   name: null,
//   link: null,
//   description: null
// })

// $.get('/api/data.json', function (res){
//   res.data.forEach(function (item){
//     App.data.push(App.Item.create(item))
//   })
//   App.advanceReadiness()
// })
