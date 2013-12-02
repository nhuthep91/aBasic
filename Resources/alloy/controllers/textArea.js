function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "textArea";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.textArea = Ti.UI.createWindow({
        id: "textArea"
    });
    $.__views.nameLB = Ti.UI.createLabel({
        color: "gray",
        left: "20dp",
        top: "20dp",
        height: "30dp",
        fontSize: "35dp",
        text: "Enter your name:",
        id: "nameLB"
    });
    $.__views.textArea.add($.__views.nameLB);
    $.__views.name = Ti.UI.createTextField({
        left: "125dp",
        top: "20dp",
        width: "175dp",
        height: "30dp",
        font: {
            fontFamily: "sansserif",
            fontStyle: "normal"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "name",
        hintText: "Nhu Thep"
    });
    $.__views.textArea.add($.__views.name);
    $.__views.addrLB = Ti.UI.createLabel({
        color: "gray",
        left: "20dp",
        top: "60dp",
        height: "30dp",
        fontSize: "35dp",
        text: "Enter your address:",
        id: "addrLB"
    });
    $.__views.textArea.add($.__views.addrLB);
    $.__views.addr = Ti.UI.createTextField({
        left: "125dp",
        width: "175dp",
        height: "30dp",
        top: "60dp",
        font: {
            fontFamily: "sansserif",
            fontStyle: "normal"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "addr",
        hintText: "Ha Noi"
    });
    $.__views.textArea.add($.__views.addr);
    $.__views.ageLB = Ti.UI.createLabel({
        color: "gray",
        left: "20dp",
        top: "100dp",
        height: "30dp",
        fontSize: "35dp",
        text: "Enter your age:",
        id: "ageLB"
    });
    $.__views.textArea.add($.__views.ageLB);
    $.__views.age = Ti.UI.createTextField({
        left: "125dp",
        width: "50dp",
        height: "30dp",
        top: "100dp",
        font: {
            fontFamily: "sansserif",
            fontStyle: "normal"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "age",
        hintText: "22"
    });
    $.__views.textArea.add($.__views.age);
    $.__views.addPeople = Ti.UI.createLabel({
        textAlign: "center",
        color: "white",
        top: "100dp",
        left: "200dp",
        backgroundColor: "orange",
        width: "60dp",
        height: "30dp",
        fontSize: "25dp",
        text: "Add",
        id: "addPeople"
    });
    $.__views.textArea.add($.__views.addPeople);
    $.__views.textArea = Ti.UI.createTab({
        backgroundSelectedColor: "#509BE6",
        font: "20dp",
        top: "5dp",
        window: $.__views.textArea,
        title: "TEXT AREA",
        id: "textArea"
    });
    $.__views.textArea && $.addTopLevelView($.__views.textArea);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;