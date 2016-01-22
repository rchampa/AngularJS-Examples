/**
 * Created by ricardoinnovati on 22/01/16.
 */
var guides = angular.module('main.guides',  ['ui.router']).config(function ($stateProvider) {
  $stateProvider.
  state('guides.login', {
    url: '/login',
    templateUrl: 'modules/guides/views/login.html',
    controller: 'LoginGuideCtrl'
  }).
  state('guides.menu', {
    url: '/login',
    template: '<div>guides-menu</div>',
    controller: 'ListCtrl'
  }).
  state('guides.web', {
    url: '/web',
    template: '<div>guides web</div>',
    controller: 'ListCtrl'
  }).
  state('guides.mobile', {
    url: '/web',
    template: '<div>guildes mobile</div>',
    controller: 'ListCtrl'
  });
});
