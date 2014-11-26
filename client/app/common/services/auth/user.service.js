'use strict';

angular.module('langmaster.common')

.factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
        id: '@_id'
    }, {
        changePassword: {
            method: 'PUT',
            params: {
                controller: 'password'
            }
        },
        updateProfile: {
            method: 'PUT',
            params: {
                controller: 'profile'
            }
        },
        removeAccount: {
            method: 'DELETE',
            params: {
                id: 'me'
            }
        },
        get: {
            method: 'GET',
            params: {
                id: 'me'
            }
        }
	});
});
