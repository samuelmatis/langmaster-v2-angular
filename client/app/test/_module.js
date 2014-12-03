'use strict';

angular.module('langmaster.test', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('test', {
            abstract: true,
            url: '/test',
            templateUrl: 'app/test/_layout.html',
            data: {
                authenticate: true,
                navbar: false,
                title: 'Test'
            }
        })
        .state('test.start', {
            url: '',
            templateUrl: 'app/test/start/testStart.html',
            controller: 'Test.StartCtrl',
            controllerAs: 'ctrl'
        })
        .state('test.main', {
            url: '',
            templateUrl: 'app/test/main/testMain.html',
            controller: 'Test.MainCtrl',
            controllerAs: 'ctrl'
        })
        .state('test.end', {
            url: '',
            templateUrl: 'app/test/end/testEnd.html',
            controller: 'Test.EndCtrl',
            controllerAs: 'ctrl'
        });
});
