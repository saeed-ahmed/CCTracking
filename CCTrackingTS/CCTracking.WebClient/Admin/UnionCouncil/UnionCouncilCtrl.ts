﻿/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./UnionCouncilTmpl.html"/>



var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../App");
import helper = require("../../Helper");
import views = require("./UnionCouncilView");
import dto = require("../../Dtos/UnionCouncilDto");
import DAL = require("../../DAL/UnionCouncil");

export class UnionCouncilCtrl extends helper.Controller {
    app: any;
    unionCouncilViewModel: views.UnionCouncilViewModel;
    unionCouncilView: views.UnionCouncilView;
    backboneModel: Backbone.Model;
    collection: dto.Models.UnionCouncilCollection;
    collectionView: views.UnionCouncilCollectionView;

    constructor() {
        super();
        //alert("constructor");
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.UnionCouncilDto();
        this.unionCouncilViewModel = new views.UnionCouncilViewModel(this.backboneModel, this);
        this.unionCouncilView = new views.UnionCouncilView({ viewModel: this.unionCouncilViewModel });
        //this.unionCouncilView.on("SaveUnionCouncil", () => this.Save(this.unionCouncilView.model));        
        this.collection = new dto.Models.UnionCouncilCollection({});
        this.collectionView = new views.UnionCouncilCollectionView({ collection: this.collection });
        //this.events.listento

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
        //var model = new dto.Models.UnionCouncilDto();
        var model = this.backboneModel;
        this.unionCouncilViewModel.bbModel = model;
        this.unionCouncilViewModel.model = kb.viewModel(model);
        // debugger;
       
        model.set("name", "");
        model.set("landmarkIdSelected", "");
        model.set("landmarkList", lookupResponse.landmark);
        model.set("isActive", "");

        this.unionCouncilViewModel = new views.UnionCouncilViewModel(model, this);
        this.unionCouncilView = new views.UnionCouncilView({ viewModel: this.unionCouncilViewModel });
        this.unionCouncilView.on("SaveUnionCouncil", () => this.Save(this.unionCouncilViewModel.bbModel));

        this.unionCouncilView.on("CancelForm", () => this.Cancel());
        //this.layout = app.AppLayout;
        this.app.MainRegion.show(this.unionCouncilView);
        //this.GetAll();
    }

    GetAll() {
        var deferred = DAL.GetAll();
        deferred.done(p=> this.GetAllCompleted(p));
    }

    GetByIdCompleted(unionCouncilDto: dto.Models.UnionCouncilDto) {
        //alert("GetByIdCompleted..");
        this.backboneModel = new Backbone.Model(unionCouncilDto["unionCouncilModel"]);
        var model = this.backboneModel;

        this.UIBinding(model);

        this.unionCouncilView = new views.UnionCouncilView({ viewModel: this.unionCouncilViewModel });
        this.unionCouncilView.on("SaveUnionCouncil", () => this.Save(this.unionCouncilViewModel.bbModel));
        this.unionCouncilView.on("CancelForm", () => this.Cancel());
        //this.unionCouncilView.trigger("TestEvent");

        //app = application.Application.getInstance();
        this.app.MainRegion.show(this.unionCouncilView);

        //this.GetAll();
        //this.GetAllCompletedNew(this.collection);

    }

    Save(unionCouncil: any) {

        //debugger;
        var appObj = this.app.request("AppGlobalSetting");
        unionCouncil.set("modifiedBy", appObj.get("Id"));
        unionCouncil.set("landmarkId", unionCouncil.get("landmarkIdSelected").id);
        unionCouncil.set("isActive", unionCouncil.get("isActive") == "1" ? true : false);
        var deferred = DAL.Save(unionCouncil);
        deferred.done(p=> this.SaveCompleted(p));
    }

    GetMinimalRequest(model) {
        var request = new dto.Models.UnionCouncilDto();
        request.set("id", model.get("id"));
        request.set("townId", model.get("townId"));
        request.set("name", model.get("name"));
        request.set("isActive", model.get("isActive"));
        request.set("createdBy", model.get("createdBy"));
        request.set("createdDate", model.get("createdDate"));
        request.set("modifiedBy", model.get("modifiedBy"));
        request.set("modifiedDate", model.get("modifiedDate"));
        return request;
    }


    GetAllCompleted(unionCouncil: dto.Models.UnionCouncilDto) {
        //app = application.Application.getInstance();
       //  debugger;
        this.collection.reset(unionCouncil["unionCouncilList"]);
        this.collectionView = new views.UnionCouncilCollectionView({ collection: this.collection });
        this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
        this.app.MainRegion.show(this.collectionView);
    }

    SaveCompleted(unionCouncilDto: dto.Models.UnionCouncilDto) {
        var result = new Backbone.Model(unionCouncilDto);
        if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
            helper.ShowModalPopup("danger", "Union Council", "Due to some technical reason Union Council have not been saved successfully!<br> Pelase try later");
        }
        else {
            //alert("Record has been saved successfully with UnionCouncil ID : " + unionCouncilDto["id"]);
            helper.ShowModalPopup("success", "Union Council", "Record has been saved successfully with UnionCouncil ID : " + unionCouncilDto["id"]);
            this.Cancel();
        }
    }

    Cancel() {
        window.location.href = "#viewUnionCouncil";
    }

    UIBinding(model: any) {

        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

        model.set("landmarkList", lookupResponse.landmark);
        var landmark = _.filter(lookupResponse.landmark, (p) => { return p.id == model.get("landmarkId"); });
        model.set("landmarkIdSelected", landmark[0]);

        model.set("isActive", model.get("isActive") ? "1" : "0");

        this.unionCouncilViewModel.bbModel = model;
        this.unionCouncilViewModel.model = kb.viewModel(model);
        ko.cleanNode($(this.unionCouncilView.el)[0]);
        ko.applyBindings(this.unionCouncilViewModel, this.unionCouncilView.el);
    }
}
