//scope변수 의존성주입
//service 의존성 주입
angular.module("todo").controller("TodoCtrl", function ($scope, todoStorage) {
  $scope.todos = todoStorage.get();
  // $scope.todos = [
  //   {
  //     title: "요가 수행",
  //     completed: false,
  //     createdAt: Date.now(),
  //   },
  //   {
  //     title: "앵귤러 학습",
  //     completed: true,
  //     createdAt: Date.now(),
  //   },
  //   {
  //     title: "운동하기",
  //     completed: false,
  //     createdAt: Date.now(),
  //   },
  // ];
  $scope.deleteClick = function (todo) {
    todoStorage.remove(todo);
    // console.log(todo);
    // //find todo index in todos

    // // $scope.todos = $scope.todos.filter((li) => li !== todo);
    // var idx = $scope.todos.findIndex(function (item) {
    //   return item.id === todo.id;
    // });
    // //remove from todos
    // if (idx > -1) {
    //   $scope.todos.splice(idx, 1);
    // }
  };
  $scope.add = function (newTodoTitle) {
    todoStorage.add(newTodoTitle);
    // console.log(newTodoTitle);
    // var newTodo = {
    //   title: newTodoTitle,
    //   completed: false,
    //   createdAt: Date.now(),
    // };
    // $scope.todos.push(newTodo);
    // console.log($scope.todos);

    // //empty form
    $scope.newTodoTitle = "";
  };
});
