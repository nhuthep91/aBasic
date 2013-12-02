function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jsonWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.json = Ti.UI.createWindow({
        id: "json",
        backgroundColor: "white"
    });
    $.__views.json && $.addTopLevelView($.__views.json);
    var __alloyId1 = {};
    var __alloyId3 = [];
    var __alloyId4 = {
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
    __alloyId3.push(__alloyId4);
    var __alloyId5 = {
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
    __alloyId3.push(__alloyId5);
    var __alloyId6 = {
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
    __alloyId3.push(__alloyId6);
    var __alloyId2 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId3
    };
    __alloyId1["template"] = __alloyId2;
    var __alloyId7 = [];
    var __alloyId9 = [];
    $.__views.__alloyId10 = {
        template: "template",
        properties: {
            id: "__alloyId10"
        }
    };
    __alloyId9.push($.__views.__alloyId10);
    $.__views.sectionJson = Ti.UI.createListSection({
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
        id: "sectionJson",
        headerTitle: "Vi du ve JSON"
    });
    __alloyId7.push($.__views.sectionJson);
    $.__views.sectionJson.items = __alloyId9;
    $.__views.myJSON = Ti.UI.createListView({
        sections: __alloyId7,
        templates: __alloyId1,
        id: "myJSON",
        defaultItemTemplate: "template"
    });
    $.__views.json.add($.__views.myJSON);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sectionJson = [ {
        name: "nhu thep",
        addr: "tu liem - ha noi",
        age: "22"
    }, {
        name: "nguyen vi",
        addr: "tu liem - ha noi",
        age: "16"
    }, {
        name: "phuong ngoc",
        addr: "an binh - hai duong",
        age: "17"
    }, {
        name: "tieu bao",
        addr: "kien thuy -  hai phong",
        age: "24"
    } ];
    var items = [];
    for (var i = 0; sectionJson.length > i; i++) items.push({
        template: "template",
        name: {
            text: sectionJson[i].name
        },
        addr: {
            text: sectionJson[i].addr
        },
        age: {
            text: sectionJson[i].age
        }
    });
    $.sectionJson.setItems(items);
    $.json.open({
        modal: true
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;