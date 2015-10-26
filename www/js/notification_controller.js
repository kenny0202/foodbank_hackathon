app.controller('NotificationCtrl', function($scope, $state, $location, $http, NewsPosts, ionicMaterialInk) {

    var validNewsPosts = [];

    var formatTags = function (tagsArray) {
      var filteredArray = [];
      for (var item in tagsArray) {
        filteredArray.push(item.name);
      }
      return filteredArray;
    }

    var refreshNewsPage = function (validNewsPosts) {
      for (var post in validNewsPosts) {
        post.tags = formatTags(post.tags);
      }
        return 0;
    };

    $http.get("http://foodbank.herokuapp.com/newsposts.json").then(function(response) {
        $scope.validNewsPosts = NewsPosts.all(response.data);
        refreshNewsPage(validNewsPosts);
    }.bind(this), function() {
        validNewsPosts = NewsPosts.fail();
        refreshNewsPage(validNewsPosts);
    }.bind(this));

    $scope.goToBlog = function() {
        $state.go('blog');
    };
});
