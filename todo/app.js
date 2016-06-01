angular.module("todoApp", []) <!-- 
.controller("TodoListController", function($scope) { //function
  var todoList = this; 
  todoList.todoItems = [ //items list
    { name: "*placeholder*", done: false }, //names of the items from start
    { name: "*placeholder*", done: false }, //names of the items from start
    { name: "*placeholder*", done: false }, //names of the items from start
    { name: "*placeholder*", done: false } //names of the items from start
  ]

  todoList.addTodo = function() { //add button
    todoList.todoItems.push( //make sure add button works
      { name: todoList.todoText } //text "add"
    )
    todoList.todoText = ""; //end
  };

  todoList.remove = function() { //remove button
    var oldTodos = todoList.todoItems; // make sure button works
    todoList.todoItems = []; // list of items
    angular.forEach(oldTodos, function(todo) { //check if checkboxes are checked
      if(!todo.done) todoList.todoItems.push(todo); //text "delete"
    })
    todoList.todoItems //end
  };

  todoList.remaining = function() { // counter view
    var notCompletedCount = 0;
    angular.forEach(todoList.todoItems, function(todo) {
      notCompletedCount += todo.done ? 0 : 1;
    }) //end

    return notCompletedCount // counter
  }


}); // end TodoListController