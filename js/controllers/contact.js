(function() {
    angular
        .module('e2e-test-sample')
        .controller('ContactController', ContactController);

    function ContactController($scope) {
        var defaultFormData = {
            name: '',
            email: '',
            message: ''
        };

        $scope.success;
        $scope.sendFeedback = function() {
            $scope.feedbackForm.$setPristine();
            $scope.feedback = defaultFormData;
            $scope.success = true;
        };
    }
})();
