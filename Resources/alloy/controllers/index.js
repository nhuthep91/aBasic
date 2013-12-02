function Controller() {
    function tab() {
        Alloy.createController("tabWin").getView();
    }
    function json() {
        Alloy.createController("jsonWin").getView();
    }
    function gps() {
        Alloy.createController("gpsWin").getView();
    }
    function SQLite() {
        Alloy.createController("sqliteWin").getView();
    }
    function camera() {}
    function gallery() {}
    function barcode() {}
    function serverJSON() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.tab = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "30dp",
        left: "20dp",
        width: "50dp",
        height: "30dp",
        title: "TAB",
        id: "tab"
    });
    $.__views.index.add($.__views.tab);
    tab ? $.__views.tab.addEventListener("click", tab) : __defers["$.__views.tab!click!tab"] = true;
    $.__views.json = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "30dp",
        left: "100dp",
        width: "50dp",
        height: "30dp",
        title: "JSON",
        id: "json"
    });
    $.__views.index.add($.__views.json);
    json ? $.__views.json.addEventListener("click", json) : __defers["$.__views.json!click!json"] = true;
    $.__views.gps = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "30dp",
        left: "180dp",
        width: "50dp",
        height: "30dp",
        title: "GPS",
        id: "gps"
    });
    $.__views.index.add($.__views.gps);
    gps ? $.__views.gps.addEventListener("click", gps) : __defers["$.__views.gps!click!gps"] = true;
    $.__views.SQLite = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "90dp",
        left: "20dp",
        width: "80dp",
        height: "30dp",
        title: "SQLite",
        id: "SQLite"
    });
    $.__views.index.add($.__views.SQLite);
    SQLite ? $.__views.SQLite.addEventListener("click", SQLite) : __defers["$.__views.SQLite!click!SQLite"] = true;
    $.__views.camera = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "90dp",
        left: "125dp",
        width: "80dp",
        height: "30dp",
        title: "CAMERA",
        id: "camera"
    });
    $.__views.index.add($.__views.camera);
    camera ? $.__views.camera.addEventListener("click", camera) : __defers["$.__views.camera!click!camera"] = true;
    $.__views.gallery = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "90dp",
        left: "230dp",
        width: "80dp",
        height: "30dp",
        title: "GALLERY",
        id: "gallery"
    });
    $.__views.index.add($.__views.gallery);
    gallery ? $.__views.gallery.addEventListener("click", gallery) : __defers["$.__views.gallery!click!gallery"] = true;
    $.__views.barcode = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "150dp",
        left: "20dp",
        width: "80dp",
        height: "30dp",
        title: "BARCODE",
        id: "barcode"
    });
    $.__views.index.add($.__views.barcode);
    barcode ? $.__views.barcode.addEventListener("click", barcode) : __defers["$.__views.barcode!click!barcode"] = true;
    $.__views.serverJSON = Ti.UI.createButton({
        opacity: .8,
        backgroundColor: "#59ACFF",
        color: "white",
        backgroundSelectedColor: "orange",
        top: "150dp",
        left: "130dp",
        width: "130dp",
        height: "30dp",
        title: "SERVER-JSON",
        id: "serverJSON"
    });
    $.__views.index.add($.__views.serverJSON);
    serverJSON ? $.__views.serverJSON.addEventListener("click", serverJSON) : __defers["$.__views.serverJSON!click!serverJSON"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.tab!click!tab"] && $.__views.tab.addEventListener("click", tab);
    __defers["$.__views.json!click!json"] && $.__views.json.addEventListener("click", json);
    __defers["$.__views.gps!click!gps"] && $.__views.gps.addEventListener("click", gps);
    __defers["$.__views.SQLite!click!SQLite"] && $.__views.SQLite.addEventListener("click", SQLite);
    __defers["$.__views.camera!click!camera"] && $.__views.camera.addEventListener("click", camera);
    __defers["$.__views.gallery!click!gallery"] && $.__views.gallery.addEventListener("click", gallery);
    __defers["$.__views.barcode!click!barcode"] && $.__views.barcode.addEventListener("click", barcode);
    __defers["$.__views.serverJSON!click!serverJSON"] && $.__views.serverJSON.addEventListener("click", serverJSON);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;