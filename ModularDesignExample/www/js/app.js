// Code goes here

angular.module('main', ['main.guides', 'main.projects', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
    state('main', {
      url: '/',
      template: '<div>index</div>',
      controller: 'IndexCtrl'
    }).
    state('login', {
      url: '/login',
      template: '<div>login</div>',
      controller: 'LoginCtrl'
    }).
    state('guides', {
      url: '/guides',
      template: '<div>guides<div ui-view></div></div>',
      controller: 'GuidesCtrl'
    }).
    state('projects', {
      url: '/projects',
      template: '<div>projects</div><div ui-view></div>',
      controller: 'ProjectsCtrl'
    });

    $urlRouterProvider.otherwise('/main');
  })
  .controller('IndexCtrl', function() {
    console.log('Index');
  })
  .controller('LoginCtrl', function() {
    console.log('Login');
  })
  .controller('GuidesCtrl', function() {
    console.log('GuidesCtrl');
  })
  .controller('ProjectsCtrl', function() {
    console.log('Projects');
  })



