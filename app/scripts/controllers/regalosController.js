angular.module('AngularScaffold.Controllers')
  .controller('regalosController', ['regaloService', '$scope', '$rootScope', '$sessionStorage',  function (regaloService, $scope, $rootScope, $sessionStorage) {
    
    $scope.regaloArreglo = [];

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
      regaloService.Postregalo($scope.regalo).then(function(response){
      }).catch(function(err){
        alert("No se pudo leer el inventario de regalos");
      });
    }

  }]); //mongodb://<dbuser>:<dbpassword>@ds029615.mongolab.com:29615/regalos
