'use strict';

angular.module('langmaster.words', [])

.config(function ($stateProvider) {
    $stateProvider
        .state('words', {
            abstract: true,
            url: '/words',
            templateUrl: 'app/words/_layout.html',
            authenticate: true
        })
        .state('words.list', {
            url: '',
            views: {
                'left': {
                    templateUrl: 'app/words/list/wordsList.html',
                    controller: 'Words.ListCtrl',
                    controllerAs: 'ctrl',
                }
            },
            authenticate: true
        });
});
