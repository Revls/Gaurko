Gaurko.reopen({
  rootElement: '#gaurko',
  meta: Em.Object.create({
    token: get('ttoken'),
    user: get('tuser'),
    name: get('tname'),
    img: get('timg')
  }),
  data: []
})

Gaurko.ApplicationView = Em.View.extend({
  classNames: ['full'],
  tagName: 'section',
  attributeBindings: ['data-tuktuk', 'id'],
  'data-tuktuk': 'boxes',
  id: 'gaurkoapp-' + VERSION
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
