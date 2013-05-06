Gaurko.auth = {
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
