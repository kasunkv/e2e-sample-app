(function() {
    'use strict';
    angular
        .module('e2e-test-sample', ['ngRoute'])
        .config(config);

    function config($routeProvider) {
        $routeProvider
        .when('/', {
           controller: 'HomeController',
           templateUrl: 'views/home.html'
        })
        .when('/about', {
           controller: 'AboutController',
           templateUrl: 'views/about.html'
        })
        .when('/contact', {
           controller: 'ContactController',
           templateUrl: 'views/contact.html'
        })
        .otherwise({ redirectTo: '/'});
    };
})();
