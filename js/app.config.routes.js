// definicion de rutas de la aplicacion
app.config(["$stateProvider","$urlRouterProvider","CONFIG","ROLES", function ($stateProvider,$urlRouterProvider,CONFIG,ROLES) {
  $urlRouterProvider.otherwise('/admin');
  $stateProvider
    .state('admin',{
      url: "/admin",
      templateUrl: "vistas/admin.html",
      data: {
        autorizado: [ROLES.ADMIN.ROL]
      }
    })
    .state('user',{
      url: "/user",
      template: "<p>Hola Usuario</p>",//"vistas/user.html",
      data: {
        autorizado: [ROLES.USER.ROL]
      }
    })
    .state('invitado',{
      url: "/invitado",
      template: "<p>Hola Invitado</p>", //"vistas/invitado.html",
      data: {
        autorizado: [ROLES.INVITADO.ROL]
      }
    })
    .state('pagos',{
      url: "/pagos",
      template: "<p>Solo permite acceso al rol Usuario "+
        "y ahora el Administrador</p>", //"vistas/invitado.html",
      data: {
        autorizado: [ROLES.ADMIN.ROL,ROLES.USER.ROL]
      }
    });
}]);

// fin de definicion de rutas de la aplicacion
