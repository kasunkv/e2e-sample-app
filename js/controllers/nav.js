(function() {
	angular
        .module('e2e-test-sample')
		.controller('NavController', NavController);

	NavController.$inject = ['$scope', '$location'];

	function NavController($scope, $location) {
		$scope.isActive = function(currentLocation) {
			return currentLocation === $location.path();
		};
	}

})();
