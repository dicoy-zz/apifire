meterScript = function(s){

    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= s;
    document.head.appendChild(script);
};
meterScript("//cdn.rawgit.com/insin/msx/master/dist/MSXTransformer.js");
meterScript("//cdnjs.cloudflare.com/ajax/libs/mithril/0.2.0/mithril.min.js");

var todo = {};

//the Todo class has two properties
todo.Todo = function(data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};

//the TodoList class is a list of Todo's
todo.TodoList = Array;