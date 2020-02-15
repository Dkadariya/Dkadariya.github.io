function initMap() {
    // The location of Uluru
    var uluru = {lat: 39.779434 , lng: -84.064106};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru,
        styles: 

        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            }
        ]
        
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }  