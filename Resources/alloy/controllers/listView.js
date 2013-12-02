function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.listView = Ti.UI.createWindow({
        id: "listView"
    });
    var __alloyId11 = {};
    var __alloyId13 = [];
    var __alloyId14 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            left: "7dp",
            top: "7dp",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            font: {
                fontSize: "15dp",
                fontWeight: "normal"
            },
            bindId: "name"
        }
    };
    __alloyId13.push(__alloyId14);
    var __alloyId15 = {
        type: "Ti.UI.Label",
        bindId: "addr",
        properties: {
            left: "7dp",
            top: "32dp",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            font: {
                fontSize: "12dp",
                fontWeight: "normal"
            },
            bindId: "addr"
        }
    };
    __alloyId13.push(__alloyId15);
    var __alloyId16 = {
        type: "Ti.UI.Label",
        bindId: "age",
        properties: {
            right: "20dp",
            bottom: "0dp",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            font: {
                fontSize: "12dp",
                fontWeight: "normal"
            },
            bindId: "age"
        }
    };
    __alloyId13.push(__alloyId16);
    var __alloyId12 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId13
    };
    __alloyId11["template"] = __alloyId12;
    var __alloyId17 = [];
    var __alloyId19 = [];
    $.__views.__alloyId20 = {
        template: "template",
        name: {
            text: "nhu thep"
        },
        addr: {
            text: "tu liem - ha noi"
        },
        age: {
            text: "22"
        },
        properties: {
            id: "__alloyId20"
        }
    };
    __alloyId19.push($.__views.__alloyId20);
    $.__views.__alloyId21 = {
        template: "template",
        name: {
            text: "mac hai"
        },
        addr: {
            text: "cau giay - ha noi"
        },
        age: {
            text: "20"
        },
        properties: {
            id: "__alloyId21"
        }
    };
    __alloyId19.push($.__views.__alloyId21);
    $.__views.__alloyId22 = {
        template: "template",
        name: {
            text: "thu ha"
        },
        addr: {
            text: "tay ho - ha noi"
        },
        age: {
            text: "21"
        },
        properties: {
            id: "__alloyId22"
        }
    };
    __alloyId19.push($.__views.__alloyId22);
    $.__views.__alloyId23 = {
        template: "template",
        name: {
            text: "nguyen vi"
        },
        addr: {
            text: "tu liem - ha noi"
        },
        age: {
            text: "16"
        },
        properties: {
            id: "__alloyId23"
        }
    };
    __alloyId19.push($.__views.__alloyId23);
    $.__views.sectionHaNoi = Ti.UI.createListSection({
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        height: "50dp",
        opacity: .7,
        font: {
            fontFamily: "sansserif",
            fontSize: "35dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "sectionHaNoi",
        headerTitle: "HA NOI"
    });
    __alloyId17.push($.__views.sectionHaNoi);
    $.__views.sectionHaNoi.items = __alloyId19;
    var __alloyId25 = [];
    $.__views.__alloyId26 = {
        template: "template",
        name: {
            text: "nhu thep"
        },
        addr: {
            text: "kim thanh - hai duong"
        },
        age: {
            text: "22"
        },
        properties: {
            id: "__alloyId26"
        }
    };
    __alloyId25.push($.__views.__alloyId26);
    $.__views.__alloyId27 = {
        template: "template",
        name: {
            text: "van ngoc"
        },
        addr: {
            text: "tu ky - hai duong"
        },
        age: {
            text: "21"
        },
        properties: {
            id: "__alloyId27"
        }
    };
    __alloyId25.push($.__views.__alloyId27);
    $.__views.__alloyId28 = {
        template: "template",
        name: {
            text: "nguyen phuong"
        },
        addr: {
            text: "chi linh - hai duong"
        },
        age: {
            text: "19"
        },
        properties: {
            id: "__alloyId28"
        }
    };
    __alloyId25.push($.__views.__alloyId28);
    $.__views.sectionHaiDuong = Ti.UI.createListSection({
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        height: "50dp",
        opacity: .7,
        font: {
            fontFamily: "sansserif",
            fontSize: "35dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "sectionHaiDuong",
        headerTitle: "HAI DUONG"
    });
    __alloyId17.push($.__views.sectionHaiDuong);
    $.__views.sectionHaiDuong.items = __alloyId25;
    var __alloyId30 = [];
    $.__views.__alloyId31 = {
        template: "template",
        name: {
            text: "nhu thep"
        },
        addr: {
            text: "van cao - hai phong"
        },
        age: {
            text: "22"
        },
        properties: {
            id: "__alloyId31"
        }
    };
    __alloyId30.push($.__views.__alloyId31);
    $.__views.__alloyId32 = {
        template: "template",
        name: {
            text: "hong nhung"
        },
        addr: {
            text: "do son - hai phong"
        },
        age: {
            text: "20"
        },
        properties: {
            id: "__alloyId32"
        }
    };
    __alloyId30.push($.__views.__alloyId32);
    $.__views.__alloyId33 = {
        template: "template",
        name: {
            text: "mai huong"
        },
        addr: {
            text: "cat hai - hai phong"
        },
        age: {
            text: "25"
        },
        properties: {
            id: "__alloyId33"
        }
    };
    __alloyId30.push($.__views.__alloyId33);
    $.__views.sectionHaiPhong = Ti.UI.createListSection({
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        height: "50dp",
        opacity: .7,
        font: {
            fontFamily: "sansserif",
            fontSize: "35dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "sectionHaiPhong",
        headerTitle: "HAI PHONG"
    });
    __alloyId17.push($.__views.sectionHaiPhong);
    $.__views.sectionHaiPhong.items = __alloyId30;
    $.__views.myListView = Ti.UI.createListView({
        sections: __alloyId17,
        templates: __alloyId11,
        id: "myListView",
        defaultItemTemplate: "template"
    });
    $.__views.listView.add($.__views.myListView);
    $.__views.listView = Ti.UI.createTab({
        backgroundSelectedColor: "#509BE6",
        font: "20dp",
        top: "5dp",
        window: $.__views.listView,
        title: "LIST VIEW",
        id: "listView"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;