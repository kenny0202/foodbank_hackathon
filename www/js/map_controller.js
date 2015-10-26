app.controller('MapCtrl', function($scope, $state, $location, $http, foodbankLocations, ionicMaterialInk) {
    // Performs a get request to get locations from Rails Server
    $http.get("http://foodbank.herokuapp.com/locations.json").then(function(response) {
      $scope.foodbankLocations = foodbankLocations.all(response.data);

    }.bind(this), function() {
      foodbankLocations = foodbankLocations.fail();
    }.bind(this));
});

// Google Maps Logic goes here
app.directive('map', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var initialLocation;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  function(position) {
                    initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    // St Margarets Church
                    margLocation = new google.maps.LatLng(49.250154, -123.073014);
                    // Southside
                    southLocation = new google.maps.LatLng(45.638728, -122.661486);
                    // St. Paul's
                    paulLocation = new google.maps.LatLng(49.283498, 49.283498);
                    // Central Presbyterian Church
                    centralLocation = new google.maps.LatLng(49.281000, -123.130568);
                    // New Westminister Shiloh
                    newWestLocation = new google.maps.LatLng(49.208187, -122.929814);
                       // New Westminister Shiloh
                    skeenaLocation = new google.maps.LatLng(49.264614,  -123.030999);
                       // New Westminister Shiloh
                    northShoreLocation = new google.maps.LatLng(49.310818, -123.074391);
                       // New Westminister Shiloh
                    longhouseLocation = new google.maps.LatLng(49.282163, -123.052157);
                       // New Westminister Shiloh
                    timothyLocation = new google.maps.LatLng(49.271755, -123.002568);
                       // New Westminister Shiloh
                    augustineLocation = new google.maps.LatLng(49.207068, -123.134323);
                       // New Westminister Shiloh
                    lakeViewLocation = new google.maps.LatLng(49.259746, -123.063559);
                       // New Westminister Shiloh
                    mountPleasantLocation = new google.maps.LatLng(49.263966, -123.100046);
                       // New Westminister Shiloh
                    fellowshipLocation = new google.maps.LatLng(49.225058, -123.055530);
                       // New Westminister Shiloh
                    baptistLocation = new google.maps.LatLng(49.229091, -122.998019);

                    map.setCenter(initialLocation);

                    var image = 'lib/images/foodbank.png';

                    var marker = new google.maps.Marker({
                        position: initialLocation,
                        animation: google.maps.Animation.DROP,
                        map: map
                    });
                    var marker_marg = new google.maps.Marker({ 
                        position: margLocation,
                        animation: google.maps.Animation.DROP,
                        map: map,
                        icon: image
                    });
                    var marker_south = new google.maps.Marker({ 
                        position: southLocation,
                        animation: google.maps.Animation.DROP,
                        map: map,
                        icon: image
                    });

                    var marker_paul = new google.maps.Marker({ 
                        position: southLocation,
                        animation: google.maps.Animation.DROP,
                        map: map,
                        icon: image
                    });

                    var marker_central = new google.maps.Marker({ 
                        position: centralLocation,
                        animation: google.maps.Animation.DROP,
                        map: map,
                        icon: image
                    });

                    var marker_newWest = new google.maps.Marker({ 
                        position: newWestLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_skeena = new google.maps.Marker({ 
                        position: skeenaLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_northShore = new google.maps.Marker({ 
                        position: northShoreLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_longhouse = new google.maps.Marker({ 
                        position:  longhouseLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_timothy = new google.maps.Marker({ 
                        position:  timothyLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_augustine = new google.maps.Marker({ 
                        position:  augustineLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_lakeView = new google.maps.Marker({ 
                        position:  lakeViewLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_mountPleasant = new google.maps.Marker({ 
                        position:  mountPleasantLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var marker_fellowship = new google.maps.Marker({ 
                        position:  fellowshipLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                     var marker_baptistLocation = new google.maps.Marker({ 
                        position:  baptistLocation,
                        map: map,
                        icon: image,
                        animation: google.maps.Animation.DROP
                    });

                    var service = new google.maps.places.PlacesService(map);
                    service.nearbySearch({
                        location: initialLocation,
                        radius: 1000,
                        types: ['restaurant']
                    }, processResults);

                    function processResults(results, status, pagination) {
                        if (status !== google.maps.places.PlacesServiceStatus.OK) {
                            return;
                        } else {
                            createMarkers(results);

                            if (pagination.hasNextPage) {
                                var moreButton = document.getElementById('more');
                                if (moreButton) {
                                    moreButton.disabled = false;

                                    moreButton.addEventListener('click', function() {
                                        moreButton.disabled = true;
                                        pagination.nextPage();
                                    });
                                }
                            }
                        }
                    }

                    var infowindow = new google.maps.InfoWindow();


                    function createMarkers(places) {
                        var bounds = new google.maps.LatLngBounds();
                        var placesList = document.getElementById('places');
                        for (var i = 0, place; place = places[i]; i++) {
                            (function() {
                                var image = {
                                    url: place.icon,
                                    size: new google.maps.Size(71, 71),
                                    origin: new google.maps.Point(0, 0),
                                    anchor: new google.maps.Point(17, 34),
                                    scaledSize: new google.maps.Size(25, 25)
                                };

                                var marker = new google.maps.Marker({
                                    map: map,
                                    icon: image,
                                    title: place.name,
                                    position: place.geometry.location,
                                    address: place.vicinity,
                                    id: place.id,
                                    animation: google.maps.Animation.DROP,
                                });

                                marker.setPlace({
                                    placeId: place.id,
                                    location: place.geometry.location
                                });

                                marker.addListener('click', function() {
                                    infowindow.setContent('<div><strong>' + marker.title + '</strong><br>' + marker.address + '<br>' + '<a href =\"/#/menu/' + marker.title + '\"> View Menu </a></span></div>');
                                    infowindow.open(map, marker);
                                });

                                bounds.extend(place.geometry.location);
                            }())

                        }
                        map.fitBounds(bounds);

                    }
                }, function() {
                    handleNoGeolocation(true);
                });
            } else {
                handleNoGeolocation(false);
            }
            var myLatlng = initialLocation,
                mapOptions = {
                    zoom: 15,
                    center: myLatlng,
                    disableDefaultUI: true,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP],
                    }
                },
                map = new google.maps.Map(element[0], mapOptions);
        }
    };
});
