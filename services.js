// service
// factory
// provider

//첫번째인자: 서비스의 이름, 두번째 실행내용
angular.module("todo").factory("todoStorage", function () {
  var storage = {
    todos: [
      {
        title: "요가 수행",
        completed: false,
        createdAt: Date.now(),
      },
      {
        title: "앵귤러 학습",
        completed: true,
        createdAt: Date.now(),
      },
      {
        title: "운동하기",
        completed: false,
        createdAt: Date.now(),
      },
    ],
    get: function () {
      return storage.todos;
    },
    remove: function (todo) {
      console.log(todo);
      //find todo index in todos

      // $scope.todos = $scope.todos.filter((li) => li !== todo);
      var idx = storage.todos.findIndex(function (item) {
        return item.id === todo.id;
      });
      //remove from todos
      if (idx > -1) {
        storage.todos.splice(idx, 1);
      }
    },
    add: function (newTodoTitle) {
      console.log(newTodoTitle);
      var newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now(),
      };
      storage.todos.push(newTodo);
      console.log(storage.todos);

      //empty form
      // storage.newTodoTitle = "";
    },
  };
  return storage;
});
