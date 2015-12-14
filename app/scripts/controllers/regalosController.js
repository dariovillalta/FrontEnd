angular.module('AngularScaffold.Controllers')
  .controller('regalosController', ['regaloService', '$scope', '$rootScope', '$sessionStorage',  function (regaloService, $scope, $rootScope, $sessionStorage) {
    
    $scope.loadRegalo =  function(){
      regaloService.Getregalo().then(function(response){
        $scope.regaloArreglo = response.data;
      }).catch(function(err){
        alert("No se pudo leer el inventario de regalos");
      });
    }

    $scope.viewBackground = "background";

    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('#bodyRegalo').css('min-height', windowHeight);
    };
    setHeight();  

    $(window).resize(function() {
      setHeight();
    });


    $scope.regalo={};
    $scope.nombre={};
    $scope.descripcion={};
    $scope.peso={};
    $scope.destinatario={};
    $scope.status='Pendiente de Entrega';
    $scope.addRegalo =  function(){
      $scope.regalo.status = $scope.status;
      regaloService.Getregalo().then(function(response){
        $scope.regaloArreglo = response.data;
      }).catch(function(err){
        alert("No se pudo leer el inventario de regalos");
      });
    }

  }]);
