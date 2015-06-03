(function () {
    angular
        .module('pendla.trip')
        .controller('TripCtrl', tripCtrl);

    tripCtrl.$inject = ['$http', 'trafiklab'];

    function tripCtrl($http, trafiklab) {
        var vm = this;

        vm.activeTab = 0;
        vm.activeTrip = false;
        vm.goToWork = goToWork;
        vm.goHome = goHome;

        vm.homeId = 7277;
        vm.workId = 9001;

        function goToWork() {
            trafiklab.getTrip(vm.homeId,vm.workId).then(function(result) {
                processResults(result, 'till jobbet');
            });
                
        }

        function goHome() {
            trafiklab.getTrip(vm.workId,vm.homeId).then(function(result) {
                processResults(result, 'hem');
            });
        }
        
        function processResults(result, destinationText) {
       
            var nearestTrip = _.first(result.data.TripList.Trip);
            vm.trip = {
                start: _.first(nearestTrip.LegList.Leg).Origin.name,
                startTime: _.first(nearestTrip.LegList.Leg).Origin.time,
                finish: _.last(nearestTrip.LegList.Leg).Destination.name,
                finishTime: _.last(nearestTrip.LegList.Leg).Origin.time
            };       
            vm.destinationText = destinationText;
            vm.activeTrip = true;
            
        }
    }

})();