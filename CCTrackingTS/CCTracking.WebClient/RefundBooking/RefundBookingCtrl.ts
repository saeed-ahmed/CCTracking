﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>


var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../App");
import helper = require("../Helper");
import views = require("./RefundBookingView");
import dto = require("../Dtos/RefundBookingDto");
import DAL = require("../DAL/RefundBooking");

export class CancelBookingCtrl extends helper.Controller {
    app: any;
    viewModel: views.RefundBookingViewModel;
    view: views.RefundBookingView;
    backboneModel: Backbone.Model;

    constructor() {
        super();
        //alert("constructor");
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.RefundBookingDto()
        this.viewModel = new views.RefundBookingViewModel(this.backboneModel, this);
        this.view = new views.RefundBookingView({ viewModel: this.viewModel });
    }

    Show() {
        var url = window.location.href;
        if (url.indexOf("id=") > -1) {
            //alert(url.substring(url.indexOf("id=") + 3, url.length));
            var id = (url.substring(url.indexOf("id=") + 3, url.length));
            var deferredById = DAL.GetById(id);
            deferredById.done(p=> this.GetByIdCompleted(p));

        }
        else {
            this.Load();
        }
    }

    Load() {

        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        //var model = new dto.Models.StationDto();
        var refundModel = this.backboneModel;
        this.viewModel.bbModel = refundModel;
        this.viewModel.model = kb.viewModel(refundModel);

        refundModel.set("name", "");
        refundModel.set("address", "");
        refundModel.set("landmarkIdSelected", "");
        refundModel.set("landmarkList", lookupResponse.landmark);
        refundModel.set("contactNo1", "");
        refundModel.set("contactNo2", "");
        refundModel.set("isCoPartner", "");
        refundModel.set("isActive", "");

        this.viewModel = new views.RefundBookingViewModel(refundModel, this);
        this.view = new views.RefundBookingView({ viewModel: this.viewModel });
        this.view.on("Event:SaveForm", () => this.Save(this.view.model));
        this.view.on("Event:CancelForm", () => this.Cancel());
        //this.layout = app.AppLayout;
        this.app.MainRegion.show(this.view);
        //this.GetAll();
    }

    //GetAll() {
    //    var deferred = DAL.GetAll();
    //    deferred.done(p=> this.GetAllCompleted(p));
    //}

    GetByIdCompleted(refundDto: dto.Models.RefundBookingDto) {
        //alert("GetByIdCompleted..");
        this.backboneModel = new Backbone.Model(refundDto["cancelBookingModel"]);
        var refundModel = this.backboneModel;

        this.UIBinding(refundModel);

        this.view = new views.RefundBookingView({ viewModel: this.viewModel });
        this.view.on("Event:SaveForm", () => this.Save(this.viewModel.bbModel));
        this.view.on("Event:CancelForm", () => this.Cancel());
        //this.stationView.trigger("TestEvent");

        //app = application.Application.getInstance();
        this.app.MainRegion.show(this.view);

        //this.GetAll();
        //this.GetAllCompletedNew(this.collection);

    }

    Save(refund: any) {
        var appObj = this.app.request("AppGlobalSetting");
        refund.set("modifiedBy", appObj.get("Id"));
        refund.set("landmarkId", refund.get("landmarkIdSelected").id);
        refund.set("isActive", refund.get("isActive") == "1" ? true : false);
        refund.set("isCoPartner", refund.get("isCoPartner") == "1" ? true : false);
        var deferred = DAL.Save(refund);
        deferred.done(p=> this.SaveCompleted(p));
    }

    //GetAllCompleted(cancelBooking: dto.Models.CancelBookingDto) {
    //    //app = application.Application.getInstance();
    //    this.collection.reset(cancelBooking["centreList"]);
    //    this.collectionView = new views.StationCollectionView({ collection: this.collection });
    //    this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
    //    this.app.MainRegion.show(this.collectionView);
    //}

    SaveCompleted(refundDto: dto.Models.RefundBookingDto) {
        this.backboneModel = new Backbone.Model(refundDto);
        var refundModel = this.backboneModel;
        //console.log(loginResponse);        
        if (refundDto == undefined) {
            alert("Booking has been cancelled successfully!");
        }
        else {
            alert("Record has been saved successfully with ID : " + refundDto["id"]);
            //this.UIBinding(model);
            this.Cancel();
        }
    }

    Cancel() {
        window.location.href = "#viewBooking";
    }

    UIBinding(refundModel: any) {
        
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        refundModel.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        refundModel.set("cashierList", lookupResponse.cashier);
        
        var centre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == refundModel.get("alkhidmatCentreId"); });
        refundModel.set("alkhidmatCentreSelected", centre[0]);

        var cashier = _.filter(lookupResponse.cashier, (p) => { return p.id == refundModel.get("officerId") });
        refundModel.set("cashierSelected", cashier[0]);

        this.viewModel.bbModel = refundModel;
        this.viewModel.model = kb.viewModel(refundModel);
        ko.cleanNode($(this.view.el)[0]);
        ko.applyBindings(this.viewModel, this.view.el);
    }
}