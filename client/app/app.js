'use strict';

angular.module('langmaster', [
    'langmaster.common',
    'langmaster.home',
    'langmaster.account',
    'langmaster.admin',
    'langmaster.words',
    'langmaster.test'
])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRestangularFields({'id': '_id'});

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
})

.run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    // and change title of current route
    $rootScope.$on('$stateChangeStart', function (event, next) {
        $rootScope.pageTitle = next.data.title;

        Auth.isLoggedInAsync(function(loggedIn) {
            if (next.data.authenticate && !loggedIn) {
                $location.path('/login');
            }
        });
    });
});
