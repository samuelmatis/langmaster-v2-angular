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
        get: {
            method: 'GET',
            params: {
                id: 'me'
            }
        },
        changeCurrency: {
            method: 'PUT',
            params: {
                controller: 'currency'
            }
        }
	});
});
