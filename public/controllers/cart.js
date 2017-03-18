angular.module('app')
.controller('CartCtrl', function($scope) {
  $scope.newart = {};
  $scope.compras = compras = [];
  $scope.articulos=[
    {
      nombre: "Portátil LENOVO Ideapad 100 Atom™ 11.6 Azul",
      precio: "499000",
      cantidad: "1"
    },
    {
      nombre: "Portátil LENOVO Idea 110 Celeron 14 Negro",
      precio: "799000",
      cantidad: "1"
    },
    {
      nombre: "Convertible 2 en 1 HP AB004 Celeron Azul" ,
      precio: "899000",
      cantidad: "1"
    }];
      $scope.addcar = function(articulo){
        console.log("add:", articulo);
        console.log("com:", $scope.compras);
        if(compras.length == 0){
          $scope.newart= articulo;
          $scope.compras.push($scope.newart);
          $scope.newart ={};
          console.log($scope.compras.indexOf($scope.articulos.nombre));
        }else if ($scope.validation(articulo, compras) == true) {
          $scope.newart= articulo;
          $scope.compras.push($scope.newart);
          $scope.newart ={};
          console.log($scope.compras.indexOf($scope.articulos.nombre));
        }else {
          console.log("ya");
        }

        };

      $scope.validation = function (articulo, compras) {

        for (var i = 0; i < compras.length; i++) {
          console.log(i);
          console.log($scope.compras[i].nombre );
          if($scope.compras[i].nombre == articulo.nombre)
          {
            return false;
          };
      };
      return true;
    };
    $scope.deletecompra = function(){
      $scope.compras.splice($scope.compras.indexOf($scope.compra), 1);
    };
});
