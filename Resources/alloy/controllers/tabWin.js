function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabWin = Ti.UI.createTabGroup({
        top: "0dp",
        tabsBackgroundColor: "#59ACFF",
        backgroundColor: "white",
        exitOnClose: "false",
        id: "tabWin"
    });
    $.__views.__alloyId35 = Alloy.createController("listView", {
        id: "__alloyId35"
    });
    $.__views.tabWin.addTab($.__views.__alloyId35.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId37 = Alloy.createController("tableView", {
        id: "__alloyId37"
    });
    $.__views.tabWin.addTab($.__views.__alloyId37.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId39 = Alloy.createController("textArea", {
        id: "__alloyId39"
    });
    $.__views.tabWin.addTab($.__views.__alloyId39.getViewEx({
        recurse: true
    }));
    $.__views.tabWin && $.addTopLevelView($.__views.tabWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabWin.open({
        modal: true
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;