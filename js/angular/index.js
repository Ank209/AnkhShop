var app = angular.module('IndexApp', []);

app.controller('IndexCtrl', function($scope) {
    $scope.login = function() {
		//Check user and pass against database
		var Connection = require('tedious').Connection;  
		var config = {  
			userName: 'Ankh',  
			password: 'SmashingPineapples1',  
			server: 'ankhdata.database.windows.net',  
			// If you are on Microsoft Azure, you need this:  
			options: {encrypt: true, database: 'ShopDataFree'}  
		};  
		var connection = new Connection(config);  
		connection.on('connect', function(err) {  
		// If no error, then good to proceed.  
			console.log("Connected");  
		}); 
		
		var Request = require('tedious').Request;  
		var TYPES = require('tedious').TYPES;  
	  
		function executeStatement() {  
			request = new Request("SELECT Pass FROM Account WHERE UserName = " + $scope.userName + ";", function(err) {  
			if (err) {  
				console.log(err);}  
			});  
			var result = "";  
			request.on('row', function(columns) {  
				columns.forEach(function(column) {  
				  if (column.value === null) {  
					console.log('NULL');  
				  } else {  
					result+= column.value + " ";  
				  }  
				});  
				console.log(result);  
				result ="";  
			});  
	  
			request.on('done', function(rowCount, more) {  
			console.log(rowCount + ' rows returned');  
			});  
			connection.execSql(request);  
		}
		
	}
});