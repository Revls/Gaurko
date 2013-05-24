!function(){"use strict";const VERSION="9547142a";
var Gaurko = window.Gk = window.Gaurko = Em.Application.create();
Gaurko.deferReadiness();

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
;function get(name){
  var el = Em.$('[name="' + name + '"]')
  return {
    el: el,
    content: el[0] ? el.attr('content') : null
  }
}

Gaurko.Helpers = Gaurko.H = Em.Object.create({
  get: get
})
;var Calendar = require('calendar')
Gaurko.ItemType = Em.Object.create({
  selected: 'income',
  content: [
    'income', 'outcome'
  ]
})

Gaurko.CalendarView = Em.View.extend({
  classNames: ['calendar'],
  calendar: new Calendar().showMonthSelect().showYearSelect(),
  click: function(e){
    console.log(e)
    window.evnt = e
  },
  selected: null,
  change: function (val){
    console.log('calendar did change + ', val)
  }.property('selected'),
  render: function (buffer){
    var cal = this.get('calendar')
    
    cal.on('change', function(date){
     console.log('selected: %s of %s %s',
       date.getDate(),
       date.getMonth(),
       date.getFullYear())
    })

    buffer.push('<div> calendar </div>')
  }
})


;Gaurko.Router.map(function(){
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

Gaurko.advanceReadiness()}()