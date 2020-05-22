angular.module("todo").directive("todoTitle", function () {
  return {
    template: "<h1>todo title</h1>",
  };
});
angular.module("todo").directive("todoItem", function () {
  return {
    templateUrl: "todoItem.tpl.html",
    // template: `<div class="input-group">
    //       <span class="input-group-addon">
    //         <input type="checkbox" ng-model="todo.completed" />
    //       </span>
    //       <input type="text" class="form-control" ng-model="todo.title" />
    //       <span class="input-group-btn">
    //         <button
    //           ng-click="deleteClick(todo)"
    //           class="btn btn-danger"
    //           type="button"
    //         >
    //           삭제
    //         </button>
    //       </span>
    //     </div>`,
  };
});

angular.module("todo").directive("todoFilters", function () {
  return {
    templateUrl: "todoFilters.tpl.html",
  };
});

angular.module("todo").directive("todoForm", function () {
  return {
    templateUrl: "todoForm.tpl.html",
  };
});
