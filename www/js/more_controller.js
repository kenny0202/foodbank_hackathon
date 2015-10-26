app.controller('MoreCtrl', function($scope, $state, $location, $ionicPopup, ionicMaterialInk) {
  $scope.goToBlog = function() {
    $state.go('blog');
  }
  $scope.goToNotifications = function() {
    $state.go('notifications');
  }
  $scope.goToFeedback = function() {
    $state.go('feedback');
  }

  $scope.goToAbout = function() {
    $state.go('about');
  }

  
});
