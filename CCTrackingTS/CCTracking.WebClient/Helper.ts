﻿/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="text!./Common/Templates/ModalPopup.html"/>

/// <amd-dependency path="underscore"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="knockback"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="backbone"/>


import APP = require("./App");
var $ = require("jquery");
var ko = require("knockout");
var kb = require("knockback");




//var Marionette = require("marionette");
//var Backbone = require("backbone");




String.prototype["getOuterHTML"] = function (selector) {
    return $(this.toString()).find(selector)[0].outerHTML;
}
export class Controller {
    layout: Marionette.Layout;
}

export class ViewModel {
    controller: any;
    model: any;
    bbModel: Backbone.Model;
    constructor(model: Backbone.Model, controller: any) {
        this.model = kb.viewModel(model);
        this.bbModel = model;
        this.controller = controller;
    }
}

export module Views {
    export class CollectionView extends Marionette.CollectionView {
        constructor(options?) {
            super(options);
        }
    }
    export class CompositeView extends Marionette.CompositeView {
        constructor(options?: any) {
            if (!options)
                options = {};
            //options.template = "#navBarCollectionViewTemplate";
            super(options);
            //this.itemView = NavBarItemView;
        }
    }
    export class ItemView extends Marionette.ItemView {
        constructor(options?) {
            if (!options)
                options = {};
            super(options);
        }
    }
    export class MvvmView extends ItemView {
        viewModel: ViewModel;
        //template: string;
        constructor(options?) {
            //if (!options) options = {};
            super(options);
        }
        initialize(options) {
            if (options.viewModel !== undefined) {
                this.viewModel = options.viewModel;
                options.model = this.viewModel.model;
            }
        }
        onShow() {
            ko.applyBindings(this.viewModel, this.el);
        }
        onClose() {
            ko.cleanNode($(this.el)[0]);
        }
    }
}

//var noOfShownModals = 0;
//export class ModalRegion extends Marionette.Region {
//    el: any;

//    onShow(view) {

//        var modalDiv = this.$el.closest(".modal");

//        if (view.title !== undefined)
//            modalDiv.find('.modal-title').text(view.title);
//        else
//            modalDiv.find('.modal-title').text("");

//        if (view.type !== undefined)
//            modalDiv.addClass(view.type);
//        else
//            modalDiv.addClass("gs-modal-edit");

//        modalDiv.modal({
//            backdrop: 'static',
//            keyboard: false

//        });
//        //noOfShownModals++;
//        //var level = "level" + noOfShownModals;
//        //modalDiv.data()["bs.modal"].$backdrop.addClass(level);
//        //modalDiv.data()["bs.modal"].$element.addClass(level);
//        //view.on("close", () => this.onBeforeClose(view));
//        //modalDiv.one('hide.bs.modal', () => view.close());

//    }

//    onBeforeClose(view) {
//        var modalDiv = view.$el.closest(".modal");

//        if (view.type !== undefined)
//            modalDiv.removeClass(view.type);
//        else
//            modalDiv.removeClass("gs-modal-edit");




//        //if (modalDiv.data()["bs.modal"].$backdrop != undefined)
//        //    modalDiv.data()["bs.modal"].$backdrop.remove();
//        //modalDiv.off('hide.bs.modal');
//        //modalDiv.modal('hide');
//        //modalDiv.data()["bs.modal"].$element.removeClass("level" + noOfShownModals);
//        //noOfShownModals--;
//        return true;
//    }

//};

export class ModalPopupView extends Views.ItemView {
    constructor(options?) {
        var modalPopupView = require("text!./Common/Templates/ModalPopup.html");
        this.template = modalPopupView.getOuterHTML("#Modal");
        super(options);
    }
}

//export class ModalRegion extends Marionette.Region.extend{
//    constructor(options?) {
//        super();
//        Marionette.Region.prototype.constructor.apply(this, arguments);
//        this.ensureEl();
//        this.$el.on('hidden', { region: this }, function (event) {
//            event.data.region.close();
//        });
//    }

//    onShow() {
//        this.$el.modal('show');
//    }

//    onClose() {
//        this.$el.modal('hide');
//    }
//}



//var app = APP.Application.getInstance();
/// Adds Authentication Token to each outgoing call if there is an AppGlobalSetting present
$.ajaxSetup({
    'beforeSend': function (xhr) {
        var app = APP.Application.getInstance();
        if (app.reqres.hasHandler("AppGlobalSetting")) {
            xhr.setRequestHeader("AuthenticationToken", app.request("AppGlobalSetting").get("AuthenticationToken"));
        }
    }
});


/// Handles all error scenarios coming from the server
//$(document).ajaxError((event, jqXHR, ajaxSettings, thrownError) => {
//    if (ajaxSettings["consumeError"] != null && ajaxSettings["consumeError"] == true)
//        return;
//    if (jqXHR.status == 403) {
//        app.vent.trigger("BackToLogin");
//    }
//    ShowError(jqXHR.responseText == "" ? thrownError : jqXHR.responseText);

//});


export function ValidationUtility() {
    var validationElements = $('[data-role="validate"]'), elementCount = 0;
    validationElements.popover({ placement: 'bottom' });
    validationElements.on('invalid', function () {
        if (elementCount === 0) {
            $('#' + this.id).popover('show');
            elementCount++;
        }
    });

    validationElements.on('blur', function () {
        $('#' + this.id).popover('hide');
    });

    var validate = function (formSelector) {
        //debugger;
        elementCount = 0;
        if (formSelector.indexOf('#') === -1) {
            formSelector = '#' + formSelector;
        }
        //$(formSelector)[0][0].setCustomValidity('ssss');
        //debugger;
        return $(formSelector)[0].checkValidity();
    };
    return { validate: validate };
}


//export function SubscribeApplicationEventListener() {    
//    var app = APP.Application.getInstance();
//    app.vent.on("BusVisitItem:Add", (busVisitCollection) => AddItem(busVisitCollection));
//    app.vent.on("BusVisitItem:Remove", RemoveItem);
//}
function AddItem(busVisitCollection) {
    //alert('added');
    var app = APP.Application.getInstance();
    busVisitCollection.push({ centreId: 'center-d', busId: 'bus-d', driverId: 'driver-d' });
    //var collectionView = new BusVisitCollectionView({ collection: items });
    //app.SubRegion.show(collectionView);
}
function RemoveItem() {
    alert('remove')
}