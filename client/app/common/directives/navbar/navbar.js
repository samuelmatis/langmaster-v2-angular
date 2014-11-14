'use strict';

angular.module('langmaster.common')

.directive('lmNavbar', function() {
    return {
        templateUrl: 'app/common/directives/navbar/navbar.html',
        replace: true,
        controllerAs: 'ctrl',
        controller: function(Auth, $state) {
            var ctrl = this;

            ctrl.appMenu = [{
                title: 'Main',
                state: 'main'
            }, {
                title: 'Settings',
                state: 'settings'
            }];

            ctrl.isCollapsed = true;
            ctrl.isLoggedIn = Auth.isLoggedIn;
            ctrl.isAdmin = Auth.isAdmin;
            ctrl.getCurrentUser = Auth.getCurrentUser;

            ctrl.collapseMenu = function() {
                ctrl.isCollapsed = true;
            };

            ctrl.logout = function() {
                Auth.logout();
                $state.go('login');
            };

            ctrl.isHomepage = function() {
                return $state.is('home');
            };

        }
    };
});
