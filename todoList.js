angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'assignment1', done:true},
      {text:'assignment2', done:false},
      {text:'assignment3', done:false}];
 
    todoList.addTodotoList = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
       if(!todo.done)
        count++;
      });
      return count;
    };
  });
