'use strict';

angular.module('langmaster.home', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl',
            data: {
                title: 'Home'
            }
        });
});
