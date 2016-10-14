(function () {

	var app = angular.module("App", []);

	app.controller("WannaBuy", ["$scope", "WebItems", function($scope, WebItems) {

		$scope.items = WebItems.get();
	}])

	app.controller("AddItemCtrl", ["$scope", "WebItems", function ($scope, WebItems) {

		$scope.item = {}

		$scope.addItem = function (item) {

			console.log(item);
			WebItems.set(item);

		}
	}])

	//vamos criar nossa factory
	app.factory("WebItems", function() {

		//privado
		var items =  [{name:"Chocolate"}, {name: "Morango"}, {name: "Leite"}];

		//criar os métodos de manipulação da lista
		function getItems() {
			return items;
		}

		function addItem(item) {
			items.push(item);
		}

		//objeto de retorno da factoty utilizado dentro das controllers
		return {
			get : getItems,
			set : addItem
		}
	});

})()