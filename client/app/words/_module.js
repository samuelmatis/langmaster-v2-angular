'use strict';

angular.module('langmaster.words', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('words', {
            abstract: true,
            url: '/words',
            data: {
                authenticate: true,
                title: 'Words'
            },
            templateUrl: 'app/words/_layout.html',
            controller: function($rootScope) {
                $rootScope.showNavbar = true;
            }
        })
        .state('words.list', {
            url: '',
            views: {
                'left': {
                    templateUrl: 'app/words/list/wordsList.html',
                    controller: 'Words.ListCtrl',
                    controllerAs: 'ctrl'
                },
                'right': {
                    templateUrl: 'app/words/add/wordAdd.html',
                    controller: 'Words.AddCtrl',
                    controllerAs: 'ctrl'
                }
            }
        })
        .state('words.edit', {
            url: '/edit/:id',
            views: {
                'full': {
                    templateUrl: 'app/words/edit/wordEdit.html',
                    controller: 'Words.EditCtrl',
                    controllerAs: 'ctrl'
                }
            }
        });
});
