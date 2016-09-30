var app = angular.module("Selecc",[]);

app.controller("FirstController",function($scope, $http){
	$scope.contSel = 0;
	$scope.selectores = [];

	$http.get('https://servicios-prueba-aquilino-pinto.c9users.io/preguntas/consultar')
		.success(function(data){
			$scope.datos = data;
		});
	
	$scope.actualizar = function(numero){
		var aux1 = [];
		for (var i = 0; i < numero; i++){
			var aux = {"id":i,"contenido":$scope.datos}
			aux1.push(aux);
			//console.log("Selectores: ",$scope.selectores);
		};
		$scope.selectores = aux1
		numero = 0;
		//console.log($scope.selectores);

	return $scope.selectores;
	}

	$scope.h = null;
	$scope.borrarCasilla = function(dato){
		var aux = $scope.selectores;
		var comienzo = 0;
		console.log(dato);
		
		while(comienzo < numero){
			if(aux[comienzo].id != idSel){
				if(aux[comienzo].contenido.id == valDato){
					aux[comienzo].contenido.descripcion = "";
					comienzo++;
				}
				else{
					comienzo++;
				}
			}
			else{
				comienzo++;
			}
			
		}
	$scope.selectores = aux;
	};
});	


