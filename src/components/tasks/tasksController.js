(function() {
    'use strict';

    /* Tasks Controllers */
    angular.module('tasksModule')
        .controller('TasksController', ['$scope', 'Tasks', function ($scope, Tasks) {
            $scope.tasks = [];

            $scope.getTasks = function() {
                Tasks.read().then(function (tasks) {
                    $scope.tasks = tasks;
                });
            };

            $scope.addTask = function(newTask) {
                Tasks.post(newTask).then(function(){
                    $scope.getTasks();
                });
            };

            $scope.getTasks();

        }]);
})();
