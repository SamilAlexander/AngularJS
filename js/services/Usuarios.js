// service y factory
app.factory("usuario1",function() {
  var dataUsuario = {
    primerNombre: "samil",
    primerApellido: "sanchez",
    cambiarNombre: function(nuevoNombre) {
      dataUsuario.primerNombre = nuevoNombre;
    }
  }

  return dataUsuario;
});

app.service("usuario",function() {
  this.primerNombre = "samil";
  this.primerApellido = "sanchez";
  this.cambiarNombre = function(nuevoNombre) {
      return dataUsuario.primerNombre = nuevoNombre;
  }
});
// fin de service y factory
