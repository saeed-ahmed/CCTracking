﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports) {
    (function (Models) {
        var DriverDto = (function (_super) {
            __extends(DriverDto, _super);
            function DriverDto() {
                _super.apply(this, arguments);
            }
            DriverDto.prototype.default = function () {
                return {
                    id: "",
                    stationId: "",
                    firstName: "",
                    lastName: "",
                    cnic: "",
                    mobile: "",
                    address: "",
                    city: "",
                    isActive: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return DriverDto;
        })(Backbone.Model);
        Models.DriverDto = DriverDto;
        var DriverSummaryDto = (function (_super) {
            __extends(DriverSummaryDto, _super);
            function DriverSummaryDto() {
                _super.apply(this, arguments);
            }
            DriverSummaryDto.prototype.default = function () {
                return {
                    driverId: "",
                    driverName: "",
                    milage: "",
                    visitCount: "",
                    vehicleNo: "",
                    visitDate: "",
                    visitInterval: "",
                    bookingId: "",
                    isActive: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return DriverSummaryDto;
        })(Backbone.Model);
        Models.DriverSummaryDto = DriverSummaryDto;
        var DriverCollection = (function (_super) {
            __extends(DriverCollection, _super);
            function DriverCollection(options) {
                this.model = DriverDto;
                _super.call(this, options);
            }
            return DriverCollection;
        })(Backbone.Collection);
        Models.DriverCollection = DriverCollection;
        var DriverSummaryCollection = (function (_super) {
            __extends(DriverSummaryCollection, _super);
            function DriverSummaryCollection(options) {
                this.model = DriverSummaryDto;
                _super.call(this, options);
            }
            return DriverSummaryCollection;
        })(Backbone.Collection);
        Models.DriverSummaryCollection = DriverSummaryCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//# sourceMappingURL=DriverDto.js.map
