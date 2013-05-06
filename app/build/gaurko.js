!function(){"use strict";
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
;Gaurko.auth = {
  user: Em.Object.extend({
    token: '',
    username: '',
    name: '',
    _img: '',
    img: function () {
      return this.get('_img').replace('_normal','')
    }.property('_img')
  }),
  init: function(controller) {
    if (Gaurko.meta.token.content && Gaurko.meta.user.content) {
      controller.set('currentUser', Gaurko.auth.user.create({
        token: Gaurko.meta.token.content,
        username: Gaurko.meta.user.content,
        name: Gaurko.meta.name.content,
        _img: Gaurko.meta.img.content
      }))
      controller.set('authorized', true)
    } else {
      controller.set('authorized', false)
    }
  }
}
;Gaurko.Router.map(function(){
  this.resource('incomes')
  this.resource('outcomes')
  this.resource('all')
  this.resource('item')
});
}()