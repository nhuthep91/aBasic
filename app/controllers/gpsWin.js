function doClick(evt){
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);

    // Check for all of the possible names that clicksouce
    // can report for the left button/view.
    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
        evt.clicksource == 'leftView') {
        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
    alert("toa do: " + evt.latitude + " - " + evt.longitude);
};

function newAnnotation(e){
	
    //var annoatationData = [];
  	
            var mountainView = Titanium.Map.createAnnotation(
            {
                latitude: e.latitude,
                longitude: e.longitude,
                title:"Nhu Thep",
                subtitle:'new position',
                pincolor: "Titanium.Map.ANNOTATION_RED",
                animate:true,
                //myid: i// CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
            });

      annotationArr.push(mountainView);
    
	//$.mapview.annotations = annoatationData;
   // return annoatationData ;
}

function setRegion(evt) {
    // For the iOS platform, wait for the complete event to ensure the region is set
    if (OS_IOS) {
        $.mapview.region = {
            latitude:20.991433, longitude:105.809216,
            latitudeDelta:0.01, longitudeDelta:0.01
        };
    }
}


Titanium.Geolocation.getCurrentPosition(function(e){
	if (e.error) {
		//if mapping location doesn't work, show an alert
		alert('Sorry, but it seems geo location is not available on your device!');
		return;
	}
//get the properties from Titanium.GeoLocation
var longitude = e.coords.longitude;
var latitude = e.coords.latitude;

mapview.region = {latitude: latitude,
				  longitude: longitude,
				  latitudeDelta:0.01,
	              longitudeDelta:0.01};
	 	 
});

var annotationArr = [$.mountainView,$.ngaTuSo,$.thuongDinh];
// These parameters can also be defined in the TSS file.
$.mapview.annotations = annotationArr;
$.mapview.region = {latitude:20.991433, longitude:105.809216, latitudeDelta:0.01, longitudeDelta:0.01};

$.win.open();
