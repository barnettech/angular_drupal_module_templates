var myApp = angular.module('myApp', []);
myApp.controller('MainCtrl', function($scope, $http) {
  $scope.buttonClicked = false;
  $scope.cancelled = false;
  $scope.todoList = [{todoText:'Clean House', done:false}];
  $scope.fetchTodoListItems = function() {
    $scope.buttonClicked = true;
    $scope.cancelled = false;
    setTimeout(function () {
    if($scope.cancelled == false) {
      $http.get("sites/all/modules/custom/angular_drupal_module_templates/angular_test/js/jsonData.json")
        .then(function(response) {
          $scope.buttonDone = true;
          $scope.todoList = response.data;
          console.log(response.data);
      });
    }
    }, 5000);
  };

  $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
  };

  $scope.cancelTodoListItems = function() {
    $scope.cancelled = true;
    $scope.buttonClicked = false;
  };

  $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
  };
});
