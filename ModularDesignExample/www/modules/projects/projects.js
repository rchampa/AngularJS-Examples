var projects = angular.module('main.projects', ['ui.router']).config(function ($stateProvider) {
  $stateProvider.
  state('projects.login', {
    url: '/login',
    template: '<div>projects login</div>',
    controller: 'LoginCtrl'
  }).
  state('projects.business', {
    url: '/business',
    template: '<div> projects business</div>',
    controller: 'ListCtrl'
  }).
  state('projects.menu', {
    url: '/menu',
    template: '<div>projects menu</div>',
    controller: 'ListCtrl'
  }).
  state('projects.community', {
    url: '/community',
    template: '<div>projects-community</div>',
    controller: 'ListCtrl'
  })
});


projects.controller('IndexCtrl', function() {
    console.log('Index');
  })
  .controller('LoginCtrl', function() {
    console.log('Login');
  })
  .controller('ListCtrl', function() {
    console.log('List');
  })
