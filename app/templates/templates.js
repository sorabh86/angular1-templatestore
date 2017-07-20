'use strict';

angular.module('templateStore.templates', ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/templates', {
		templateUrl : 'templates/templates.html',
		controller : 'TemplateCtrl'
	}).when('/templates/:templateId', {
		templateUrl : 'templates/template-details.html',
		controller : 'TemplateDetailsCtrl'
	});
}])
.controller('TemplateCtrl',['$scope', function($scope){
	console.log('TemplateCtrl runs', $scope);
}])
.controller('TemplateDetailsCtrl',['$scope', function($scope){
	console.log('TemplateCtrl runs', $scope);
}]);