var get = function (name){
  var el = Em.$('[name="' + name + '"]')
  return {
    el: el,
    content: el[0] ? el.attr('content') : null
  }

}

var Gaurko =
window.Gaurko = Em.Application.create({
  rootElement: '#gaurko',
  meta: Em.Object.create({
    token: get('ttoken'),
    user: get('tuser'),
    name: get('tname'),
    img: get('timg')
  }),
  getByName: get,
  data: []
});

Gaurko.ApplicationView = Em.View.extend({
  classNames: ['full'],
  attributeBindings: ['data-tuktuk', 'id'],
  'data-tuktuk': 'boxes',
  id: 'gaurkoapp'
})

Gaurko.ApplicationController = Ember.Controller.extend({
  authorized: null,
  currentUser: null,
  authorizing: function() {
    return this.get('authorized') === null;
  }.property('authorized'),
  init: function() {
    this._super()
    Gaurko.auth.init(this)
  }
})
