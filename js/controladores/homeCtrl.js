// controladores en paralelo
app.controller("appCtrl",["$scope","$rootScope","usuario","$interval",function($scope,$rootScope,usuario,$interval){
  // Compartir datos entre controladores mediante el $rootScope
  $rootScope.variableComun = "Somos Controladors";
  var vm = $scope;
  vm.nombre = usuario.primerNombre;
  vm.apellido = usuario.primerApellido;

  $interval(function() {
    vm.nombre = usuario.primerNombre;
    vm.apellido = usuario.primerApellido;
  }, 1000);
}]);

app.controller("appCtrl1",["$scope","$rootScope","usuario",function($scope,$rootScope,usuario){

  var vm1=$scope;
  vm1.name = $rootScope.variableComun;
  vm1.cambiar = function (name) {
    usuario.primerNombre = name;
  }

}]);
// fin de controladores en paralelo

// eventos $emit, $on, $broadcast
app.controller("padreCtrl",["$scope",function($scope) {
    $scope.count = 0;
    $scope.$on("padre",function(event, data) {
      $scope.count += data;
    });
    $scope.eventoPadre =function () {
      $scope.$broadcast("hijos",1);
    };
}]);

app.controller("hijo1Ctrl",["$scope",function($scope) {
  $scope.count = 0;
  $scope.eventoHijo1 = function() {
    $scope.$emit("padre",1);
  };
  $scope.$on("hijos",function (event, data) {
    $scope.count += data;
  });
}]);

app.controller("hijo2Ctrl",["$scope",function($scope) {
  $scope.count = 0;
  $scope.eventoHijo2 = function() {
    $scope.$emit("padre",1);
  }
  $scope.$on("hijos",function (event, data) {
    $scope.count += data;
  });
}]);
// fin de eventos $emit, $on, $broadcast
