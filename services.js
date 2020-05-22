// service
// factory
// provider

//첫번째인자: 서비스의 이름, 두번째 실행내용
angular.module("todo").factory("todoStorage", function () {
  var TODO_DATA = "TODO_DATA";
  var storage = {
    todos: [
      // {
      //   title: "요가 수행",
      //   completed: false,
      //   createdAt: Date.now(),
      // },
      // {
      //   title: "앵귤러 학습",
      //   completed: true,
      //   createdAt: Date.now(),
      // },
      // {
      //   title: "운동하기",
      //   completed: false,
      //   createdAt: Date.now(),
      // },
    ],

    _saveToLocalStorage: function (data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },
    _getFromLocalStorage: function () {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },
    get: function () {
      // storage.todos = storage._getFromLocalStorage();
      //객체나 array를 복사할때 angular.copy 사용
      angular.copy(storage._getFromLocalStorage(), storage.todos);
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
        storage._saveToLocalStorage(storage.todos);
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
      storage._saveToLocalStorage(storage.todos);
      console.log(storage.todos);

      //empty form
      // storage.newTodoTitle = "";
    },
    update: function () {
      storage._saveToLocalStorage(storage.todos);
    },
  };
  return storage;
});
