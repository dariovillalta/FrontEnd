angular.module('AngularScaffold.Services').factory('regaloService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://angular-scaffold-backend.herokuapp.com/';
		return {
				Getregalo: function(){
					return $http.get(baseUrl + "v1/regalo");
				},
				Postregalo: function(payload){
					return $http.post(baseUrl + "v2/regalo", payload);
				},
				Putregalo: function(payload){
					return $http.put(baseUrl + "v3/regalo", payload);
				},
				Deleteregalo: function(nombre){
					return $http.delete(baseUrl + "v4/regalo/" + nombre);
				}
	    };
}]);
