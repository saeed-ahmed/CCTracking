﻿/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./DriverTmpl.html"/>
/// <amd-dependency path="text!./DriverGrid.html"/>

var _ = require('underscore');
import helper = require("../../Helper");
var templateView = require("text!./DriverTmpl.html");
var templateGrid = require("text!./DriverGrid.html");

import application = require("../../App");
var app;



// View Model
export class DriverViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

// View
export class DriverView extends helper.Views.MvvmView {
    constructor(options?) {        
        this.template = templateView;
        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel"

        }
        super(options);
        //this.listenTo(this, "TestEvent", () => this.TestFunction());
    }
    close() {
        //alert("closeing this view");
        //this.off("SaveDriver");
    }
    Cancel() {
        this.trigger("CancelForm");
    }
    TestFunction() {
        alert("test function");
    }
    Save(e) {
        e.preventDefault();
        this.trigger("SaveDriver");
        //this.trigger("TestEvent");
        //new driverCtrl.DriverCtrl().Save(this.viewModel.bbModel);
    }
}

export class DriverCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?: any) {
        options.itemView = DriverItemView;
        options.template = templateGrid.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "tbody";
        super(options);
    }
    //onShow() {

    //    this.dataTable = this.$el.find("#tblBooking").dataTable({
    //        "autoWidth": false,
    //        "info": true,
    //        "processing": true,
    //        //"scrollY": "500px",
    //        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    //        "language": {
    //            "paginate": {
    //                "next": "Next",
    //                "previous": "Prev"
    //            },
    //            "emptyTable": "No record found!",
    //            //"info": "Dispalying page _PAGE_ of _PAGES_",
    //            "infoEmpty": "No record found!",
    //            "zeroRecords": "kuch nahi milla"
    //        }
    //        //"pageLength": 50,

    //        //"lengthChange": false

    //        //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]

    //    });
    //}
}

export class DriverItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateGrid.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            "click .jsShowDetail": "ShowDetail"
        };
        super(options);
    }
    ShowDetail() {
        this.trigger("ShowDetail");
    }
}

