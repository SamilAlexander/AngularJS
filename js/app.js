var app = angular.module('app',['ui.router']);

// Lo que se va a correr antes de iniciar la aplicacion
app.run(["$rootScope","$location","$state","$log","CONFIG","ROLES",function ($rootScope,$location,$state,$log,CONFIG,ROLES) {
  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams) {
    console.log("valor del event:");
    console.log(event);
    console.log("valor del toState:");
    console.log(toState);
    console.log("valor del toParams:");
    console.log(toParams);
    console.log("valor del fromState:");
    console.log(fromState);
    console.log("valor del fromParams:");
    console.log(fromParams);
    console.log("ESTO ES UNA PRUEBA");
    var numero = 7;
    console.log("El numero es: ",numero);

    if (toState.data !== undefined) {
      //console.log(toState.data.autorizado.indexOf(CONFIG.ROL_ACTUAL));
      // indexOf Devuelve el primer índice en el que se encuentra un elemento dado,
      // o -1 si el elemento no se encuentra.
      if(toState.data.autorizado.indexOf(CONFIG.ROL_ACTUAL) !== -1)
      {
        $log.info("Exito >> Tiene permiso a la ruta.");
      }
      else
      {
        $log.warn("Error >> No tiene permiso a la ruta.")
        event.preventDefault();
        var rolActual = CONFIG.ROL_ACTUAL;
        if(rolActual == 1)
        {
          $location.path(ROLES.ADMIN.PATH);
          //$state.go("admin");
        }
        else if(rolActual == 2)
        {
          $location.path(ROLES.USER.PATH);
          //$state.go(ROLES.USER.PATH);
        }
        else if(rolActual == 3)
        {
          $location.path(ROLES.INVITADO.PATH);
          //$state.go(ROLES.INVITADO.PATH);
        }
      }
    }
  });
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    console.log("valor del event:");
    console.log(event);
    console.log("valor del toState:");
    console.log(toState);
    console.log("valor del toParams:");
    console.log(toParams);
    console.log("valor del fromParams:");
    console.log(fromParams);
  });
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
    console.log("valor del event:");
    console.log(event);
    console.log("valor del toState:");
    console.log(toState);
    console.log("valor del toParams:");
    console.log(toParams);
    console.log("valor del fromParams:");
    console.log(fromParams);
    console.log("valor del error:");
    console.log(error);
  });
  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
    console.log("valor del event:");
    console.log(event);
    console.log("valor del unfoundState:");
    console.log(unfoundState);
    console.log("valor del fromState:");
    console.log(fromState);
    console.log("valor del fromParams:");
    console.log(fromParams);



  });
}]);
// fin de el metodo run
