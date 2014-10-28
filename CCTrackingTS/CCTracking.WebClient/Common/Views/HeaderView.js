﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette", "text!CCTracking.WebClient/Common/Templates/Header.html"], function(require, exports) {
    /// <reference path="../../../Scripts/typings/require/require.d.ts" />
    /// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/Header.html"/>
    var templateView = require("text!CCTracking.WebClient/Common/Templates/Header.html");

    var app = require("../../App");

    var HeaderItemView = (function (_super) {
        __extends(HeaderItemView, _super);
        //appObj:any;
        function HeaderItemView(options) {
            if (!options)
                options = {};
            options.template = templateView.getOuterHTML("#SiteHeader");

            templateHelpers:
            (function () {
                return {
                    isAdminRole: function () {
                        return app.request("AppGlobalSetting").get("isAdmin");
                    }
                };
            });
            _super.call(this, options);
        }
        return HeaderItemView;
    })(Marionette.ItemView);
    exports.HeaderItemView = HeaderItemView;
});
//aaa
