// Ionic Food Bank App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'food-bank' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'food-bank.services' is found in services.js
// 'food-bank.controllers' is found in controllers.js
app = angular.module('food-bank', ['ionic', 'ionic-material', 'food-bank.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.news-feed', {
    url: '/news-feed',
    views: {
      'tab-news-feed': {
        templateUrl: 'templates/tab-news-feed.html',
        controller: 'NewsFeedCtrl'
      }
    }
  })

  .state('tab.map', {
      url: '/map',
      views: {
        'tab-map': {
          templateUrl: 'templates/tab-map.html',
          controller: 'MapCtrl'
        }
      }
    })

  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl'
      }
    }
  })

  .state('tab.notifications', {
    url: '/notifications',
    views: {
      'tab-notifications': {
        templateUrl: 'templates/tab-notifications.html',
        controller: 'NotificationCtrl'
      }
    }
  })



  .state('blog', {
    url: '/blog',
    templateUrl: 'templates/blog.html',
    controller: 'BlogCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'FeedbackCtrl'
  })

  // .state('notifications', {
  //   url: '/notifications2',
  //   templateUrl: 'templates/tab-notifications.html',
  //   controller: 'NotificationCtrl'
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/map');

});
