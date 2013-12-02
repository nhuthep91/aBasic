function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tableView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tableView = Ti.UI.createWindow({
        id: "tableView"
    });
    $.__views.row1 = Ti.UI.createTableViewRow({
        opacity: "0.5",
        height: "40dp",
        id: "row1",
        backgroundColor: "orange"
    });
    var __alloyId40 = [];
    __alloyId40.push($.__views.row1);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        color: "red",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontFamily: "sansserif",
            fontSize: "25dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Hang so 1",
        id: "__alloyId41"
    });
    $.__views.row1.add($.__views.__alloyId41);
    $.__views.row2 = Ti.UI.createTableViewRow({
        opacity: "0.5",
        height: "40dp",
        id: "row2",
        backgroundColor: "green"
    });
    __alloyId40.push($.__views.row2);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        color: "red",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontFamily: "sansserif",
            fontSize: "25dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Hang so 2",
        id: "__alloyId42"
    });
    $.__views.row2.add($.__views.__alloyId42);
    $.__views.row3 = Ti.UI.createTableViewRow({
        opacity: "0.5",
        height: "40dp",
        id: "row3",
        backgroundColor: "brown"
    });
    __alloyId40.push($.__views.row3);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        color: "red",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontFamily: "sansserif",
            fontSize: "25dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Hang so 3",
        id: "__alloyId43"
    });
    $.__views.row3.add($.__views.__alloyId43);
    $.__views.myTableView = Ti.UI.createTableView({
        data: __alloyId40,
        id: "myTableView"
    });
    $.__views.tableView.add($.__views.myTableView);
    $.__views.tableView = Ti.UI.createTab({
        backgroundSelectedColor: "#509BE6",
        top: "5dp",
        fontSize: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        window: $.__views.tableView,
        title: "TABLE VIEW",
        center: "true",
        animatedCenter: "true",
        id: "tableView"
    });
    $.__views.tableView && $.addTopLevelView($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;