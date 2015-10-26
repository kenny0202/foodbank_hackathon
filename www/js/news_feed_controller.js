app.controller('NewsFeedCtrl', function($scope, $state, $location, $http, NewsPosts, ionicMaterialInk) {

    

    var validNewsPosts = [];

    var refreshNewsPage = function (validNewsPosts) {

        return 0;
    };

    function getNews() {
        $http.get("http://foodbank.herokuapp.com/newsposts.json").then(function(response) {
        $scope.validNewsPosts = NewsPosts.all(response.data);
        refreshNewsPage(validNewsPosts);
        }.bind(this), function() {
            validNewsPosts = NewsPosts.fail();
            refreshNewsPage(validNewsPosts);

        }.bind(this));
    }

    getNews();

    $scope.goToBlog = function() {
        $state.go('blog');
    };

    $scope.doRefresh = function() {
        // $scope.post.unshift({name: 'Incoming todo ' + Date.now()})
        getNews();
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply()
    };
});
