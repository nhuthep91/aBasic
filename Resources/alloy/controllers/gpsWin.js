function Controller() {
    function doClick(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
        ("leftButton" == evt.clicksource || "leftPane" == evt.clicksource || "leftView" == evt.clicksource) && Ti.API.info("Annotation " + evt.title + ", left button clicked.");
        alert("toa do: " + evt.latitude + " - " + evt.longitude);
    }
    function newAnnotation(e) {
        var mountainView = Titanium.Map.createAnnotation({
            latitude: e.latitude,
            longitude: e.longitude,
            title: "Nhu Thep",
            subtitle: "new position",
            pincolor: "Titanium.Map.ANNOTATION_RED",
            animate: true
        });
        annotationArr.push(mountainView);
    }
    function setRegion() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gpsWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId0 = [];
    $.__views.mountainView = Ti.Map.createAnnotation({
        latitude: 20.991433,
        longitude: 105.809216,
        id: "mountainView",
        title: "3i Headquarters",
        subtitle: "Ha Dinh, Thanh Xuan",
        pincolor: Titanium.Map.ANNOTATION_RED,
        leftButton: "/images/appcelerator_small.png",
        myid: "1"
    });
    __alloyId0.push($.__views.mountainView);
    $.__views.ngaTuSo = Ti.Map.createAnnotation({
        latitude: 21.003112,
        longitude: 105.820137,
        id: "ngaTuSo",
        title: "Nhu Thep",
        subtitle: "nga tu so",
        pincolor: Titanium.Map.ANNOTATION_RED,
        leftButton: "/images/appcelerator_small.png",
        myid: "2"
    });
    __alloyId0.push($.__views.ngaTuSo);
    $.__views.thuongDinh = Ti.Map.createAnnotation({
        latitude: 20.993036,
        longitude: 105.806726,
        id: "thuongDinh",
        title: "Nhu Thep",
        subtitle: "giay thuong dinh",
        pincolor: Titanium.Map.ANNOTATION_RED,
        leftButton: "/images/appcelerator_small.png",
        myid: "3"
    });
    __alloyId0.push($.__views.thuongDinh);
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId0,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.win.add($.__views.mapview);
    doClick ? $.__views.mapview.addEventListener("click", doClick) : __defers["$.__views.mapview!click!doClick"] = true;
    setRegion ? $.__views.mapview.addEventListener("complete", setRegion) : __defers["$.__views.mapview!complete!setRegion"] = true;
    newAnnotation ? $.__views.mapview.addEventListener("longpress", newAnnotation) : __defers["$.__views.mapview!longpress!newAnnotation"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            alert("Sorry, but it seems geo location is not available on your device!");
            return;
        }
        var longitude = e.coords.longitude;
        var latitude = e.coords.latitude;
        mapview.region = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
    });
    var annotationArr = [ $.mountainView, $.ngaTuSo, $.thuongDinh ];
    $.mapview.annotations = annotationArr;
    $.mapview.region = {
        latitude: 20.991433,
        longitude: 105.809216,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.win.open();
    __defers["$.__views.mapview!click!doClick"] && $.__views.mapview.addEventListener("click", doClick);
    __defers["$.__views.mapview!complete!setRegion"] && $.__views.mapview.addEventListener("complete", setRegion);
    __defers["$.__views.mapview!longpress!newAnnotation"] && $.__views.mapview.addEventListener("longpress", newAnnotation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;