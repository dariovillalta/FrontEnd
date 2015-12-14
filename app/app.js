var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'loginController',
            name: "login",
            data: {
              pageTitle: 'LogIn'
            }
        })
        .state('regalos', {
            url: '/regalos',
            templateUrl: '/views/regalo.html',
            controller: 'regalosController',
            name: "regalos",
            data: {
              pageTitle: 'LogIn'
            }
        })
}]);
