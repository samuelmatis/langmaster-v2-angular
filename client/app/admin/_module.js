'use strict';

angular.module('langmaster.admin', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/admin/admin.html',
            controller: 'Admin.AdminCtrl',
            controllerAs: 'ctrl',
            data: {
                authenticate: true
            },
            resolve: {
                isAdmin: function(Auth, $state, $timeout) {
                    $timeout(function() {
                        if (!Auth.isAdmin()) {
                            return $state.go('words.list');
                        }
                    });
                }
            }
        });
});
