 $(document).ready(function(){
    L.mapbox.accessToken = 'pk.eyJ1IjoiZWFwIiwiYSI6IjZ5UG0yTFEifQ.1E1XmBHGouwyUQ4WexRI1A';
    var map = L.mapbox.map('map', 'mapbox.streets-basic', {
      zoomControl: true
    }).setView([38.2484695, -85.7564636], 15);

    // Disable drag and zoom handlers.
    // map.dragging.disable();
    map.touchZoom.disable()
    // map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();


    L.mapbox.featureLayer({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [
              -85.7564636,
              38.2484695
            ]
        },
        properties: {
            title: 'The Henry Clay',
            description: '604 S 3rd St',
            'marker-size': 'medium',
            'marker-color': '#F762AE',
            'marker-symbol': 'star'
        }
    }).addTo(map);
 });