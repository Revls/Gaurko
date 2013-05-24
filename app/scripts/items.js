var Calendar = require('calendar')
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


