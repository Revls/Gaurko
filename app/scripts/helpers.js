function get(name){
  var el = Em.$('[name="' + name + '"]')
  return {
    el: el,
    content: el[0] ? el.attr('content') : null
  }
}

Gaurko.Helpers = Gaurko.H = Em.Object.create({
  get: get
})
