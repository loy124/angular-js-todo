//모듈: 컨테이너
//모듈안에: 컨트롤러, 디렉티브, 서비스가 담겨있다
(function () {
  // app이라는 변수에 todo라는 모듈이 담긴다
  var app = angular.module("todo", []);

  //두번째 파라미터는 배열로준다
  // app.controller("TodoCtrl", [
  //   "$scope",
  //   function ($scope) {
  //     // $scope.name = "Chris";
  //     // $scope.data = "aa";
  //     $scope.todos = [
  //       {
  //         title: "요가 수행",
  //         completed: false,
  //         createdAt: Date.now(),
  //       },
  //       {
  //         title: "앵귤러 학습",
  //         completed: true,
  //         createdAt: Date.now(),
  //       },
  //       {
  //         title: "운동하기",
  //         completed: false,
  //         createdAt: Date.now(),
  //       },
  //     ];
  //     $scope.deleteClick = function (todo) {
  //       console.log(todo);
  //       //find todo index in todos

  //       // $scope.todos = $scope.todos.filter((li) => li !== todo);
  //       var idx = $scope.todos.findIndex(function (item) {
  //         return item.id === todo.id;
  //       });
  //       //remove from todos
  //       if (idx > -1) {
  //         $scope.todos.splice(idx, 1);
  //       }
  //     };
  //     $scope.add = function (newTodoTitle) {
  //       console.log(newTodoTitle);
  //       var newTodo = {
  //         title: newTodoTitle,
  //         completed: false,
  //         createdAt: Date.now(),
  //       };
  //       $scope.todos.push(newTodo);
  //       console.log($scope.todos);

  //       //empty form
  //       $scope.newTodoTitle = "";
  //     };
  //   },
  // ]);
  // js에서는 camelCase
  // html에서는 -를 붙인다
  // app.directive("todoTitle", function () {
  //   return {
  //     template: "<h1>todo title</h1>",
  //   };
  // });
  // app.directive("todoItem", function () {
  //   return {
  //     templateUrl: "todoItem.tpl.html",
  //     // template: `<div class="input-group">
  //     //       <span class="input-group-addon">
  //     //         <input type="checkbox" ng-model="todo.completed" />
  //     //       </span>
  //     //       <input type="text" class="form-control" ng-model="todo.title" />
  //     //       <span class="input-group-btn">
  //     //         <button
  //     //           ng-click="deleteClick(todo)"
  //     //           class="btn btn-danger"
  //     //           type="button"
  //     //         >
  //     //           삭제
  //     //         </button>
  //     //       </span>
  //     //     </div>`,
  //   };
  // });
})();
