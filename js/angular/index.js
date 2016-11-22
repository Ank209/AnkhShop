var app = angular.module('IndexApp', ['breeze.angular']);

app.run(['breeze', function (breeze) { }]);

app.controller('IndexCtrl', function($scope) {
    $scope.login = function() {
		//Check user and pass against database
		
	}
});