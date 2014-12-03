'use strict';

angular.module('langmaster.account', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/account/login/login.html',
            controller: 'Account.LoginCtrl',
            controllerAs: 'ctrl',
            resolve: {
                isLoggedIn: function(Auth, $state) {
                    Auth.isLoggedInAsync(function(result) {
                        if (result) return $state.go('words.list');
                    });
                }
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'app/account/signup/signup.html',
            controller: 'Account.SignupCtrl',
            controllerAs: 'ctrl',
            resolve: {
                isLoggedIn: function(Auth, $state) {
                    Auth.isLoggedInAsync(function(result) {
                        if (result) return $state.go('words.list');
                    });
                }
            }
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/account/profile/profile.html',
            controller: 'Account.ProfileCtrl',
            controllerAs: 'ctrl',
            data: {
                authenticate: true
            }
        });
});
