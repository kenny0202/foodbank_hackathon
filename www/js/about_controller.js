app.controller('AboutCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  $scope.goToFeedback = function() {
		$state.go('feedback');
	}
})