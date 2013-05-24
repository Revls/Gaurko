Ember.TEMPLATES["_asides"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n      <div class=\"margin-left margin-right\">\n        <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("currentUser.img")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"responsive padding-left padding-top padding-right\"/>\n\n        <h4 class=\"text bold color theme inline\">Balance</h4>\n        <span class=\"margin-left tag bck color inline text bold\">monthly</span>\n        <ul class=\"margin\" data-tuktuk=\"totals\">\n          \n          <li><strong>138</strong><small>outcomes</small></li>\n          <li><strong>14</strong><small>incomes</small></li>\n          <li class=\"text color red\"><strong>3609</strong><small>total</small></li>\n        </ul>\n      </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      <div class=\"margin\">\n        <strong class=\"text big normal block \">About <a href=\"/\">Gaurko</a></strong>\n        <div class=\"display block  text justify small\">Gaurko means \"today\" in\n          <small>euskera</small>, so this app helps you run your daily finances,\n          and it gives you monthly reports for your incomes and/or outcomes.\n        </div>\n      </div>\n    ");
  }

  data.buffer.push("<aside id=\"menu\" class=\"bck dark column_3\">\n  <header class=\"text center bck color\">\n    <h1 class=\"on-left text bold\">Gaurko\n      <span class=\"tag bck theme\"> Eta</span>\n    </h1>\n    <a href=\"#\" class=\"on-right text big icon cog\" data-tuktuk-box=\"menu\"></a>\n  </header>\n  \n  <article class=\"scroll\">\n    ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "authorized", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </article>\n  \n</aside>\n");
  return buffer;
  
});

Ember.TEMPLATES["_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n<header class=\"bck light\">\n  <h1 class=\"on-left text small bold\"> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentUser.username", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <span class=\"tag bck theme\"> welcome</span>\n  </h1>\n  <nav class=\"on-right\">\n      <button class=\"small icon plus\" >Item</button>\n  </nav>\n</header>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n<header class=\"bck light\">\n</header>\n");
  }

  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "authorized", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["_home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"full\">\n");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n<article class=\"padding scroll\">\n  <header class=\"span12\">\n    <h3> Welcome back ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentUser.username", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n  </header>\n  <section class=\"span12\">\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </section>\n</article>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["_landing"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<section class=\"bck landing text center lowc full padding top\">\n    <div class=\"row\">\n      <div class=\"column_10 offset_1\">\n        <h1><strong>Gaur</strong>ko</h1>\n        <h2 class=\"margin-bottom\">Keep your daily finances in order</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n         <div class=\"column_8 offset_2 form\">\n             <input type=\"email\" id=\"mail\" class=\"large on-left\" placeholder=\"Your email address\" style=\"width:81%\">\n             <button class=\"button large on-right\"><span class=\"icon envelope\"></span>Send</button>\n         </div>\n     </div>\n    <h5 class=\"text book\">don't worry, we hate spam too.</h5>\n</section>\n");
  
});

Ember.TEMPLATES["_modals"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"modal-right\" data-tuktuk=\"modal\" class=\"side column_5\">\n  <header>\n     <h4 class=\"inline text book\">Side window.</h4>\n     <button data-modal=\"close\" class=\"transparent small on-right inline icon remove\"></button>\n  </header>\n  <article>\n     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos dolorum minus fugiat rem similique velit aperiam est sequi neque nulla tenetur minima autem facilis temporibus quaerat consectetur impedit praesentium.\n  </article>\n</div>\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, options;
  data.buffer.push("\n  ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "asides", options) : helperMissing.call(depth0, "partial", "asides", options))));
  data.buffer.push("\n  ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "home", options) : helperMissing.call(depth0, "partial", "home", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, options;
  data.buffer.push("\n  ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "landing", options) : helperMissing.call(depth0, "partial", "landing", options))));
  data.buffer.push("\n");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "authorized", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "modals", options) : helperMissing.call(depth0, "partial", "modals", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Loading...\n");
  
});

Ember.TEMPLATES["items"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" Go Back ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n      <li id=\"");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "item", "", options) : helperMissing.call(depth0, "linkTo", "item", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"left\">\n  <h1>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</h1>\n  <ul id=\"items\">\n    ");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </ul>\n</div>\n\n<div id=\"item\" class=\"right\">\n  ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["items/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2> click on the left </h2>\n");
  
});

Ember.TEMPLATES["items/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form id=\"form\" name=\"form\" class=\"margin-top\">\n  <label>Title</label>\n  ");
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("title")
  },contexts:[],types:[],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n  <fieldset>\n    <label>type:<small>Select option</small></label>\n    <span class=\"select\">\n      ");
  hashTypes = {'contentBinding': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("Gaurko.ItemType.content"),
    'valueBinding': ("Gaurko.ItemType.selected")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </span>\n  </fieldset>\n\n  <fieldset>\n      <label>Amount:<small>in $USD</small></label>\n      ");
  hashTypes = {'value': "ID",'type': "STRING",'name': "STRING",'id': "STRING"};
  options = {hash:{
    'value': ("amount"),
    'type': ("number"),
    'name': ("amount"),
    'id': ("amount")
  },contexts:[],types:[],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </fieldset>\n\n  <fieldset>\n      <label>Date:<small>Comments here</small></label>\n      ");
  hashTypes = {'valueBinding': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Gaurko.CalendarView", {hash:{
    'valueBinding': ("selected")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </fieldset>\n\n  <fieldset>\n      <label>Switches<small>Touch lover</small></label>\n      <div data-control=\"checkbox\">\n          <input type=\"checkbox\" value=\"None\" id=\"prueba\">\n          <label for=\"prueba\"></label>\n      </div>\n  </fieldset>\n\n  <fieldset>\n      <label>Radio<small>buttons</small></label>\n      <input type=\"radio\" name=\"radio1\"><span>Yes</span>\n      <input type=\"radio\" name=\"radio2\" disabled=\"\"><span>No</span>\n  </fieldset>\n\n  <fieldset>\n      <label>Checkbox:<small>Styled</small></label>\n      <input type=\"checkbox\" name=\"radio1\"><span>One</span>\n      <input type=\"checkbox\" name=\"radio2\"><span>Two</span>\n  </fieldset>\n</form>\n");
  return buffer;
  
});