var myApp = angular.module("calcApp", []);


myApp.controller("CalcCtrl",["$scope", CalcularDesconto]);

function CalcularDesconto($scope) {
	
	$scope.preco = 100;
	$scope.desconto = 0;	
	$scope.valorFinal = 0;
	$scope.isWatching = false;

	$scope.iniciarWatch = function () {		
		$scope.isWatching = true;
		$scope.watch = $scope.$watch("desconto", calculo, true);
	}

	$scope.encerrarWatch = function() {
		$scope.isWatching = false;
		$scope.watch();
	}

	function calculo() {
		$scope.valorFinal = $scope.preco * ( $scope.desconto / 100);
	}
}