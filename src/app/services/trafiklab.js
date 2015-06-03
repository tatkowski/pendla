(function () {
    'use strict';

    var serviceId = 'trafiklab';
    angular.module('pendla.trip')
	.factory(serviceId, ['$q', '$http', trafiklab]);

    function trafiklab($q, $http) {

        var service = {
            getTrip: getTrip,
            searchPlace: searchPlace           
        };

        return service;

        function getTrip(startId, endId) {
            return $http.get('http://api.sl.se/api2/TravelplannerV2/trip.json?key=96da278aa0334a1887305bbed22f2a37&originId='+startId+'&destId='+endId)
        }

        function searchPlace(query) {
            return $http.get('http://api.sl.se/api2/typeahead.json?key=c6c73818cd1c4cfb8b2fdf547d309b2d&stationsonly=true&maxresults=5&searchstring='+query)
        }
    }
    
})();
