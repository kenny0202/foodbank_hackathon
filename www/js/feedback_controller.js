app.controller('FeedbackCtrl', function($http, $scope, $state, $location, $ionicPopup, ionicMaterialInk, $ionicHistory) {
  

  var feedbackType = 'Question';


  var onFeedbackSuccess = function() {
  	var alertPopup = $ionicPopup.alert({
            title: 'Feedback Sent',
            template: 'Thanks for contacting us!'
        }).then(function() {
        	$state.go('tab.more');
        	}.bind(this));
        return 0;
  };

  var onFeedbackFailure = function() {
  	var alertPopup = $ionicPopup.alert({
            title: 'Message Send Failure',
            template: 'Please make sure you are connected to the internet'
        });
        return 0;
  }

  var sendFeedback = function(jsonFeedback) {
  	var sendconfig = {
  		method:"POST",
  		headers: { 
  			"Accept" : "application/json; charset=utf-8"
  		},
  		contentType:"application/json; charset=utf-8",
  		dataType:"json",
  		data: jsonFeedback,
  		url: "http://foodbank.herokuapp.com/feedbacks"};

  	$http(sendconfig).then(function() {
  		onFeedbackSuccess();
  	},
  	function(headers) {
  		onFeedbackFailure();
  	})
  };


   $scope.handleFeedback = function() {
    var fullName = $('#nameInput').val();
    var contactInfo = $('#contactInput').val();
    var messageInfo = $('#messageInput').val();

    if (messageInfo === "") {
    	var alertPopup = $ionicPopup.alert({
            title: 'Empty Message Error',
            template: 'Please enter a feedback message'
        });
        return 0;
        
    }

    var feedback = {category: feedbackType, name: fullName, contact: contactInfo, message: messageInfo};

    sendFeedback(feedback);

    return 0;
  }

  $scope.selectQuestion = function() {
  	feedbackType = 'Question';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#questionButton').addClass('selectedCategory');
  }

  $scope.selectProblem = function() {
  	feedbackType = 'Problem';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#problemButton').addClass('selectedCategory');
  }

  $scope.selectPraise = function() {
  	feedbackType = 'Praise';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#praiseButton').addClass('selectedCategory');
  }

  $scope.selectIdea = function() {
  	feedbackType = 'Idea';
  	$('.selectedCategory').removeClass('selectedCategory');
  	$('#ideaButton').addClass('selectedCategory');
  }

  $scope.myGoBack = function() {
    $state.go('tab.more');
  };

})