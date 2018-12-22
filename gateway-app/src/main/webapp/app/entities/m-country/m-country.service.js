(function() {
    'use strict';
    angular
        .module('gatewayApp')
        .factory('MCountry', MCountry);

    MCountry.$inject = ['$resource'];

    function MCountry ($resource) {
        var resourceUrl =  'masterapp/' + 'api/m-countries/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
